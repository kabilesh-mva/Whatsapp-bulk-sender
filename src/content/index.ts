import { sendViaWhatsAppWeb } from './whatsappRuntime';

/**
 * Content script — runs ONLY on https://web.whatsapp.com/*.
 * Responsibilities (kept intentionally tiny):
 *  1. Detect WhatsApp Web readiness (logged-in shell vs. QR screen) WITHOUT reading
 *     message content, chat lists or contacts from the page DOM.
 *  2. Mount a side panel that hosts the Relay Campaigns UI. The panel lives in its
 *     own iframe (extension web_accessible_resources page), which gives full style
 *     isolation without injecting React into the host page context.
 *  3. Maintain a long-lived port so the service worker knows the tab/session is alive,
 *     and execute ONE outbound send per request when (and only when) the operator has
 *     selected the WhatsApp Web transport. All page-DOM automation lives in
 *     ./whatsappRuntime.ts — the single replaceable transport module.
 * It never reads, stores, or processes inbound chat messages or contacts from the page DOM.
 */

const PANEL_HOST_ID = 'relay-campaigns-panel-host';
const TOGGLE_BTN_ID = 'relay-campaigns-toggle';
// Panel sizing defaults — the user can drag the panel's left edge to resize and
// the choice is remembered (see `rc:panel-width` in chrome.storage.local).
const PANEL_MIN_WIDTH = 420;
const PANEL_MAX_FRACTION = 0.92;
const PANEL_DEFAULT_WIDTH = 560;

let panelOpen = false;
let port: chrome.runtime.Port | null = null;
let userWidthPref = 0; // 0 = no saved preference yet

function isLoggedInShell(): boolean {
  // Presence of the app layout (not any message node) is enough to know the shell rendered.
  return !!document.querySelector('#app .app-wrapper-web, #app [role="application"], #side');
}

function reportSession(): void {
  const loggedIn = isLoggedInShell();
  try {
    port?.postMessage({ type: 'session:state', loggedIn });
  } catch {
    /* port may be closing */
  }
}

interface OutboundSendRequest {
  type: 'relay:send';
  ackId: string;
  message: { toNormalizedPhone: string; text: string; attachment?: { fileName: string; mimeType: string; sizeBytes: number } };
}

/** Execute one transport attempt requested by the service worker and ack it back. */
async function handleOutboundSend(req: OutboundSendRequest): Promise<void> {
  let result: Awaited<ReturnType<typeof sendViaWhatsAppWeb>>;
  try {
    result = await sendViaWhatsAppWeb({
      toNormalizedPhone: req.message.toNormalizedPhone,
      text: req.message.text,
      attachment: req.message.attachment,
    });
  } catch (e) {
    result = { ok: false, errorCode: 'PAGE_EXCEPTION', errorMessage: e instanceof Error ? e.message : String(e) };
  }
  try {
    port?.postMessage({ type: 'send:ack', ackId: req.ackId, ok: result.ok, errorCode: result.errorCode, errorMessage: result.errorMessage });
  } catch {
    /* port closed mid-send — SW will time out the ack and mark the attempt failed */
  }
}

function ensurePort(): void {
  if (port) return;
  try {
    port = chrome.runtime.connect({ name: 'whatsapp-session' });
    port.onDisconnect.addListener(() => {
      port = null;
      // Reconnect lazily on next visibility change / interval tick.
    });
    port.onMessage.addListener((m: unknown) => {
      const msg = m as { type?: string };
      if (msg?.type === 'relay:toggle-panel') togglePanel();
      if (msg?.type === 'relay:set-panel-open') setPanelOpen(true);
      if (msg?.type === 'relay:set-panel-closed') setPanelOpen(false);
      if (msg?.type === 'relay:send') void handleOutboundSend(m as OutboundSendRequest);
    });
  } catch {
    port = null;
  }
}

function moveToggle(open: boolean): void {
  const btn = document.getElementById(TOGGLE_BTN_ID);
  if (btn) btn.style.right = open ? `${panelWidth()}px` : '20px';
}

function createToggle(): void {
  if (document.getElementById(TOGGLE_BTN_ID)) return;
  const btn = document.createElement('button');
  btn.id = TOGGLE_BTN_ID;
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Toggle Relay Campaigns panel');
  btn.title = 'Relay Campaigns';
  btn.textContent = 'R';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: panelOpen ? `${panelWidth()}px` : '20px',
    zIndex: '999998',
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #6d28d9, #0ea5e9)',
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'system-ui, sans-serif',
    boxShadow: '0 4px 14px rgba(0,0,0,.25)',
    transition: 'right .18s ease-out',
  } as CSSStyleDeclaration);
  btn.addEventListener('click', () => togglePanel());
  document.body.appendChild(btn);
}

function panelWidth(): number {
  const max = Math.round(window.innerWidth * PANEL_MAX_FRACTION);
  const min = Math.min(PANEL_MIN_WIDTH, max); // on tiny viewports, shrink the minimum too
  const desired = userWidthPref > 0 ? userWidthPref : PANEL_DEFAULT_WIDTH;
  return Math.max(min, Math.min(desired, max));
}

/** Load the saved width preference once (best-effort). */
function loadWidthPref(): void {
  try {
    chrome.storage?.local?.get(['rc:panel-width'], (res) => {
      const w = Number(res?.['rc:panel-width']);
      if (Number.isFinite(w) && w >= 280) {
        userWidthPref = w;
        setPanelPosition(panelOpen);
      }
    });
  } catch {
    /* storage unavailable — keep default */
  }
}

function saveWidthPref(w: number): void {
  userWidthPref = w;
  try {
    chrome.storage?.local?.set({ 'rc:panel-width': w });
  } catch {
    /* ignore — preference simply won't persist */
  }
}

/** Draggable resize handle rendered inside the iframe's left edge. */
function attachResizeHandle(frame: HTMLIFrameElement): void {
  if (frame.dataset.rcResizable === '1') return;
  frame.dataset.rcResizable = '1';
  const startXs: number[] = [];
  const startWs: number[] = [];
  let dragging = false;
  frame.addEventListener('mousedown', (e) => {
    const rect = frame.getBoundingClientRect();
    // Only react to presses within ~7px of the left edge (the grab strip).
    if (e.clientX - rect.left > 7) return;
    dragging = true;
    startXs.push(e.clientX);
    startWs.push(rect.width);
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging || startXs.length === 0) return;
    const dx = startXs[startXs.length - 1] - e.clientX; // dragging left = wider
    const next = Math.round(startWs[startWs.length - 1] + dx);
    const max = Math.round(window.innerWidth * PANEL_MAX_FRACTION);
    const min = Math.min(PANEL_MIN_WIDTH, max);
    frame.style.width = `${Math.max(min, Math.min(next, max))}px`;
    moveToggle(true);
  });
  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.userSelect = '';
    const w = Math.round(frame.getBoundingClientRect().width);
    if (w > 0) saveWidthPref(w);
    startXs.length = 0;
    startWs.length = 0;
  });
}

function mountPanel(): HTMLIFrameElement {
  const existing = document.getElementById(PANEL_HOST_ID) as HTMLIFrameElement | null;
  if (existing) return existing;
  const frame = document.createElement('iframe');
  frame.id = PANEL_HOST_ID;
  frame.setAttribute('title', 'Relay Campaigns panel');
  // Extension page inside an isolated frame: styles and scripts are fully ours.
  frame.src = chrome.runtime.getURL('panel/index.html');
  Object.assign(frame.style, {
    position: 'fixed',
    top: '0',
    right: `-${panelWidth()}px`,
    bottom: '0',
    width: `${panelWidth()}px`,
    border: 'none',
    borderLeft: '1px solid rgba(0,0,0,.2)',
    zIndex: '999999',
    background: '#f6f7fb',
    boxShadow: '0 8px 30px rgba(15,23,42,.28)',
    transition: 'right .18s ease-out',
    resize: 'horizontal',
  } as CSSStyleDeclaration);
  document.body.appendChild(frame);
  attachResizeHandle(frame);
  return frame;
}

function setPanelPosition(open: boolean): void {
  const frame = document.getElementById(PANEL_HOST_ID) as HTMLIFrameElement | null;
  if (!frame) return;
  // While the user is actively dragging, don't fight the drag.
  if (frame.dataset.rcDragging !== '1') {
    frame.style.width = `${panelWidth()}px`;
  }
  frame.style.right = open ? '0' : `-${frame.getBoundingClientRect().width}px`;
  moveToggle(open);
}

/**
 * Explicit open/close commands from the popup / keyboard shortcut.
 * `open` = true forces visible, false forces hidden, undefined toggles.
 */
function setPanelOpen(open?: boolean): void {
  const next = open ?? !panelOpen;
  if (next === panelOpen) {
    // Already in the requested state — just make sure geometry is right.
    if (next) setPanelPosition(true);
    return;
  }
  ensurePort();
  panelOpen = next;
  if (panelOpen) mountPanel();
  setPanelPosition(panelOpen);
}

function togglePanel(): void {
  setPanelOpen();
}

function start(): void {
  createToggle();
  ensurePort();
  reportSession();
  loadWidthPref();
  // Messages from the popup / service worker ("open or close the panel") arrive here.
  chrome.runtime.onMessage.addListener((msg: unknown) => {
    const m = msg as { type?: string; open?: boolean };
    if (m?.type === 'relay:toggle-panel') togglePanel();
    if (m?.type === 'relay:set-panel-open') setPanelOpen(true);
    if (m?.type === 'relay:set-panel-closed') setPanelOpen(false);
  });
  // Alt+Shift+R toggles the panel anywhere on the page (ignored while typing).
  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'R' || e.key === 'r')) {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || t?.isContentEditable) return;
      e.preventDefault();
      togglePanel();
    }
  });
  // Light polling only for shell presence — no message data is ever read.
  setInterval(() => {
    ensurePort();
    reportSession();
  }, 15_000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      ensurePort();
      reportSession();
    }
  });
  window.addEventListener('resize', () => setPanelPosition(panelOpen));
  void chrome.runtime.sendMessage({ type: 'content:hello' }).catch(() => undefined);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}

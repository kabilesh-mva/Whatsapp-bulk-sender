console.log('🚀 RELAY CAMPAIGNS CONTENT SCRIPT LOADED SUCCESSFULLY!');
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
const PANEL_WIDTH = 480;

let panelOpen = false;
let port: chrome.runtime.Port | null = null;

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
  message: {
    toNormalizedPhone: string;
    text: string;
    attachment?: { fileName: string; mimeType: string; sizeBytes: number };
  };
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
    result = {
      ok: false,
      errorCode: 'PAGE_EXCEPTION',
      errorMessage: e instanceof Error ? e.message : String(e),
    };
  }
  try {
    port?.postMessage({
      type: 'send:ack',
      ackId: req.ackId,
      ok: result.ok,
      errorCode: result.errorCode,
      errorMessage: result.errorMessage,
    });
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
  return Math.min(PANEL_WIDTH, Math.round(window.innerWidth * 0.92));
}

function mountPanel(): HTMLIFrameElement {
  const existing = document.getElementById(PANEL_HOST_ID) as HTMLIFrameElement | null;
  if (existing) return existing;

  const frame = document.createElement('iframe');
  frame.id = PANEL_HOST_ID;
  frame.setAttribute('title', 'Relay Campaigns panel');
  frame.src = chrome.runtime.getURL('panel/index.html');

  Object.assign(frame.style, {
    position: 'fixed',
    top: '0',
    right: `-${panelWidth()}px`,
    width: `${panelWidth()}px`,
    height: '100vh',
    border: 'none',
    borderLeft: '1px solid rgba(0,0,0,.2)',
    zIndex: '2147483647',
    background: '#f6f7fb',
    boxShadow: '0 8px 30px rgba(15,23,42,.28)',
    transition: 'right .18s ease-out',
  } as CSSStyleDeclaration);

  document.body.appendChild(frame); // <--- ADD THIS LINE BACK!
  return frame;
}

function setPanelPosition(open: boolean): void {
  const frame = document.getElementById(PANEL_HOST_ID) as HTMLIFrameElement | null;
  if (!frame) return;
  frame.style.width = `${panelWidth()}px`;
  frame.style.height = '100vh';
  frame.style.right = open ? '0' : `-${panelWidth()}px`;
  moveToggle(open);
}

function togglePanel(): void {
  ensurePort();
  panelOpen = !panelOpen;
  if (panelOpen) mountPanel();
  setPanelPosition(panelOpen);
}

function start(): void {
  createToggle();
  ensurePort();
  reportSession();
  // Messages from the popup ("open the panel") arrive through this tab's channel.
  chrome.runtime.onMessage.addListener((msg: unknown) => {
    const m = msg as { type?: string };
    if (m?.type === 'relay:toggle-panel') togglePanel();
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

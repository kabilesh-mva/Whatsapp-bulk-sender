/**
 * Content script — runs ONLY on https://web.whatsapp.com/*.
 * Responsibilities (kept intentionally tiny):
 *  1. Detect WhatsApp Web readiness (logged-in shell vs. QR screen) without touching message content.
 *  2. Mount a closed-shadow-DOM side panel that hosts the Relay Campaigns UI.
 *  3. Maintain a long-lived port so the service worker knows the tab/session is alive.
 * It never reads, stores, or processes chat messages or contacts from the page DOM.
 */

const PANEL_HOST_ID = 'relay-campaigns-panel-host';
const TOGGLE_BTN_ID = 'relay-campaigns-toggle';

let panelOpen = false;
let port: chrome.runtime.Port | null = null;

function isLoggedInShell(): boolean {
  // Presence of the app layout (not any message node) is enough to know the shell rendered.
  return !!document.querySelector('#app .app-wrapper-web, #app [role="application"], #side');
}

function reportSession(): void {
  const loggedIn = isLoggedInShell();
  try {
    port?.postMessage({ loggedIn });
  } catch {
    /* port may be closing */
  }
  void chrome.runtime.sendMessage({ type: 'session:update', snapshot: { loggedIn } }).catch(() => undefined);
}

function ensurePort(): void {
  if (port) return;
  try {
    port = chrome.runtime.connect({ name: 'whatsapp-session' });
    port.onDisconnect.addListener(() => {
      port = null;
      // Reconnect lazily on next visibility change / interval tick.
    });
  } catch {
    port = null;
  }
}

function injectStyles(linkHref: string): void {
  const host = document.getElementById(PANEL_HOST_ID);
  if (!host || !host.shadowRoot) return;
  if (host.shadowRoot.querySelector('link[data-relay-css]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = linkHref;
  link.dataset.relayCss = 'true';
  host.shadowRoot.appendChild(link);
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
    right: '20px',
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
  } as CSSStyleDeclaration);
  btn.addEventListener('click', () => togglePanel());
  document.body.appendChild(btn);
}

async function mountPanel(): Promise<void> {
  if (document.getElementById(PANEL_HOST_ID)) return;
  const host = document.createElement('div');
  host.id = PANEL_HOST_ID;
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: 'open' });
  const root = document.createElement('div');
  root.id = 'relay-root';
  shadow.appendChild(root);

  // Load the pre-built panel bundle into the shadow root.
  const url = chrome.runtime.getURL('panel/inject.js');
  const res = await fetch(url);
  const code = await res.text();
  const scriptEl = document.createElement('script');
  // Scripts in shadow DOM don't execute; run it manually with the shadow root available.
  const fn = new Function(`var __relayShadowRoot = ${'document.getElementById("' + PANEL_HOST_ID + '").shadowRoot'};\n${code}`);
  fn.call(window);
  void scriptEl;

  injectStyles(chrome.runtime.getURL('assets/panel.css'));
}

async function togglePanel(): Promise<void> {
  ensurePort();
  if (!panelOpen) {
    await mountPanel();
    window.postMessage({ source: 'relay-campaigns', kind: 'panel:set-open', open: true }, window.location.origin);
    panelOpen = true;
  } else {
    window.postMessage({ source: 'relay-campaigns', kind: 'panel:set-open', open: false }, window.location.origin);
    panelOpen = !isPanelVisibleInternal();
  }
}

function isPanelVisibleInternal(): boolean {
  const host = document.getElementById(PANEL_HOST_ID);
  if (!host) return false;
  const panel = host.shadowRoot?.querySelector('[data-relay-panel="visible"]');
  return !!panel;
}

function start(): void {
  createToggle();
  ensurePort();
  reportSession();
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
  void chrome.runtime.sendMessage({ type: 'content:hello' }).catch(() => undefined);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}

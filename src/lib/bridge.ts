import type { BridgeEvent, BridgeRequest, BridgeResponse } from '../types/domain';

/**
 * Message bridge used by panel + popup.
 * Falls back to a direct in-page implementation when `chrome.runtime` is unavailable
 * (e.g., running the UI as a plain Vite tab for development and automated tests).
 */

type Listener = (evt: BridgeEvent) => void;
const listeners = new Set<Listener>();

function chromeAvailable(): boolean {
  return typeof chrome !== 'undefined' && !!chrome.runtime?.sendMessage;
}

export async function request<T>(req: BridgeRequest): Promise<T> {
  if (chromeAvailable()) {
    const res = (await chrome.runtime.sendMessage(req)) as BridgeResponse;
    if (!res) throw new Error('No response from extension background.');
    if (res.ok === false) throw new Error(res.error);
    return res.payload as T;
  }
  // Dev/test fallback: run an in-memory engine in the page itself.
  const { localEngine } = await import('./localEngine');
  return localEngine.handle(req) as Promise<T>;
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  if (chromeAvailable()) {
    chrome.runtime.onMessage.addListener((msg: BridgeEvent) => {
      if (msg && msg.type === 'event') listener(msg);
    });
  } else {
    const { localEngine } = await import('./localEngine');
    localEngine.subscribe(listener);
  }
  return () => listeners.delete(listener);
}

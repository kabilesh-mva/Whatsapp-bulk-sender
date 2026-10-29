/**
 * Popup: small status + quick-open interface.
 * Shows session state and recent campaigns, and opens WhatsApp Web with the panel.
 */
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { BridgeEvent, BridgeRequest, Campaign, QueueSummary, SessionSnapshot } from '../types/domain';

async function req<T>(r: BridgeRequest): Promise<T> {
  const res = (await chrome.runtime.sendMessage(r)) as
    | { ok: true; payload: T }
    | { ok: false; error: string }
    | undefined;
  if (!res) throw new Error('Background unavailable');
  if ('ok' in res && res.ok === false) throw new Error(res.error);
  return (res as { payload: T }).payload;
}

function Popup() {
  const [session, setSession] = useState<SessionSnapshot | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [summary, setSummary] = useState<QueueSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      const [snap, list] = await Promise.all([
        req<SessionSnapshot>({ type: 'session/snapshot' }),
        req<Campaign[]>({ type: 'campaign/list' }),
      ]);
      setSession(snap);
      setCampaigns(list);
      const running = list.find((c) => c.state === 'running' || c.state === 'paused');
      if (running) setSummary(await req<QueueSummary>({ type: 'campaign/summary', id: running.id }));
      else setSummary(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  useEffect(() => {
    void refresh();
    const listener = (msg: unknown) => {
      const evt = msg as BridgeEvent;
      if (evt?.type === 'event' && (evt.name === 'queue:updated' || evt.name === 'session:updated')) void refresh();
    };
    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openWhatsApp = async () => {
    const tabs = await chrome.tabs.query({ url: 'https://web.whatsapp.com/*' });
    if (tabs[0]?.id != null) {
      await chrome.tabs.update(tabs[0].id, { active: true });
      if (tabs[0].windowId != null) await chrome.windows.update(tabs[0].windowId, { focused: true });
      // Ensure the content script is present (it may be missing on a tab opened
      // before the extension was installed/reloaded), then explicitly OPEN the
      // panel — toggle semantics here caused "click does nothing" flakiness.
      try {
        await chrome.tabs.sendMessage(tabs[0].id, { type: 'relay:ping' });
      } catch {
        const manifest = chrome.runtime.getManifest();
        const file = manifest.content_scripts?.[0]?.js?.[0];
        if (file) await chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: [file] });
      }
      chrome.tabs.sendMessage(tabs[0].id, { type: 'relay:set-panel-open' }).catch(() => undefined);
    } else {
      await chrome.tabs.create({ url: 'https://web.whatsapp.com/' });
    }
    window.close();
  };

  const active = campaigns.filter((c) => c.state !== 'completed' && c.state !== 'stopped').slice(0, 4);

  return (
    <div className="wrap">
      <header>
        <img src={chrome.runtime.getURL('icons/icon-32.png')} alt="" />
        <div>
          <h1>Relay Campaigns</h1>
          <span className="tag">Local-first · demo mode</span>
        </div>
      </header>

      {error && <p role="alert" style={{ color: 'var(--danger)' }}>{error}</p>}

      <div className="card" aria-live="polite">
        <div className="row">
          <strong>Session</strong>
          <span
            className={`pill ${session?.loggedIn ? 'ok' : session?.whatsappTabConnected ? 'warn' : 'danger'}`}
          >
            {session?.loggedIn ? 'WhatsApp Web connected' : session?.whatsappTabConnected ? 'Tab open, not logged in' : 'No tab'}
          </span>
        </div>
        {summary && (
          <p className="note">
            Active queue: {summary.sent}/{summary.total} sent · {summary.skipped} skipped · {summary.failed} failed
          </p>
        )}
      </div>

      <div className="card">
        <strong>Campaigns</strong>
        {active.length === 0 ? (
          <p className="note">No draft/ready/running campaigns yet.</p>
        ) : (
          <ul className="campaigns">
            {active.map((c) => (
              <li key={c.id}>
                <span className="name">{c.name}</span>
                <span className="pill">{c.state}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="primary" onClick={() => void openWhatsApp()}>
        Open WhatsApp Web panel
      </button>

      <footer>All data stays on this device. No telemetry. Delete everything in Settings → Data.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Popup />);

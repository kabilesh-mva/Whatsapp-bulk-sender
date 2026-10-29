import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Campaign, QueueEvent, QueueSummary, RecipientResult, SessionSnapshot } from '../../types/domain';
import { request, subscribe } from '../../lib/bridge';
import { useApp, t } from '../../panel/AppContext';

/**
 * Sending Queue screen: explicit states, live counters, operator controls,
 * session-loss transparency and a structured per-recipient event log.
 */

const STATE_LABEL: Record<Campaign['state'], string> = {
  draft: t('state.draft'),
  ready: t('state.ready'),
  running: t('state.running'),
  paused: t('state.paused'),
  completed: t('state.completed'),
  stopped: t('state.stopped'),
  failed: t('state.failed'),
};

export function QueueScreen({ initialCampaignId }: { initialCampaignId?: string }) {
  const { session } = useApp();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>(initialCampaignId);
  const [results, setResults] = useState<RecipientResult[]>([]);
  const [events, setEvents] = useState<QueueEvent[]>([]);
  const [summary, setSummary] = useState<QueueSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirmAction, setConfirmAction] = useState<{ label: string; run: () => Promise<void> } | null>(null);

  const selected = campaigns.find((c) => c.id === selectedId) ?? campaigns[0];

  const refresh = useCallback(async () => {
    const list = await request<Campaign[]>({ type: 'campaign/list' });
    setCampaigns(list);
    if (list.length && !list.some((c) => c.id === selectedId)) setSelectedId(list[0].id);
  }, [selectedId]);

  useEffect(() => {
    void refresh().catch((e) => setError(String(e)));
  }, [refresh]);

  useEffect(() => {
    if (!selected) {
      setResults([]);
      setEvents([]);
      setSummary(null);
      return;
    }
    void Promise.all([
      request<RecipientResult[]>({ type: 'campaign/results', id: selected.id }),
      request<QueueEvent[]>({ type: 'campaign/events', id: selected.id }),
      request<QueueSummary>({ type: 'campaign/summary', id: selected.id }),
    ])
      .then(([r, e, s]) => {
        setResults(r);
        setEvents(e);
        setSummary(s);
      })
      .catch((err) => setError(String(err)));
  }, [selected]);

  useEffect(() => {
    const unsub = subscribe((evt) => {
      if (evt.type === 'event' && evt.name === 'queue:updated' && evt.campaignId === selected?.id) {
        setSummary(evt.summary);
        void refresh();
      }
    });
    return unsub;
  }, [selected?.id, refresh]);

  const act = useCallback(
    async (label: string, fn: () => Promise<unknown>, needsConfirm = false) => {
      const run = async () => {
        setBusy(true);
        setError(null);
        setNotice(null);
        try {
          await fn();
          setNotice(`${label}: done.`);
          await refresh();
        } catch (e) {
          setError(e instanceof Error ? e.message : String(e));
        } finally {
          setBusy(false);
        }
      };
      if (needsConfirm) setConfirmAction({ label, run });
      else await run();
    },
    [refresh],
  );

  const sessionLost = session.whatsappTabConnected === false && selected?.state === 'running';

  const orderedResults = useMemo(() => [...results].sort((a, b) => a.timestamp - b.timestamp), [results]);

  if (campaigns.length === 0) {
    return (
      <div className="rc-empty">
        No campaigns yet. Create one in the Compose tab — it will appear here with state <strong>Draft</strong>.
      </div>
    );
  }

  return (
    <div>
      {error && <div className="rc-alert rc-alert-danger" role="alert">{error}</div>}
      {notice && <div className="rc-alert rc-alert-info" role="status">{notice}</div>}

      <section className="rc-card">
        <h2>Campaign</h2>
        <label className="rc-label" htmlFor="queue-campaign-select">Select campaign</label>
        <select
          id="queue-campaign-select"
          className="rc-select"
          value={selected?.id ?? ''}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {campaigns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} — {STATE_LABEL[c.state]} ({new Date(c.createdAt).toLocaleDateString()})
            </option>
          ))}
        </select>
      </section>

      {selected && (
        <>
          <section className="rc-card" aria-live="polite">
            <div className="rc-row">
              <h2 style={{ margin: 0 }}>{selected.name}</h2>
              <span className="rc-badge" data-state={selected.state}>{STATE_LABEL[selected.state]}</span>
            </div>
            {sessionLost && (
              <div className="rc-alert rc-alert-danger" role="alert">
                WhatsApp Web tab is not connected. The queue halts instead of sending into a dead session.
                Re-open web.whatsapp.com and use Resume after reviewing what will happen.
              </div>
            )}
            {summary && (
              <>
                <div className="rc-stats" style={{ marginTop: 10 }}>
                  <div className="rc-stat"><b>{summary.total}</b><span>Total</span></div>
                  <div className="rc-stat"><b>{summary.queued}</b><span>Queued</span></div>
                  <div className="rc-stat"><b>{summary.sent}</b><span>Sent</span></div>
                  <div className="rc-stat"><b>{summary.skipped}</b><span>Skipped</span></div>
                  <div className="rc-stat"><b>{summary.failed}</b><span>Failed</span></div>
                  <div className="rc-stat"><b>{summary.remaining}</b><span>Remaining</span></div>
                </div>
                <div className="rc-progress" style={{ marginTop: 10 }} role="progressbar"
                     aria-valuemin={0} aria-valuemax={summary.total} aria-valuenow={summary.sent}>
                  <div style={{ width: `${summary.total ? (summary.sent / summary.total) * 100 : 0}%` }} />
                </div>
                <p className="rc-devices-note">
                  “Sent” means accepted by the transport — delivery/read receipts are not verified in this build.
                </p>
              </>
            )}
            <div className="rc-row" style={{ marginTop: 12 }}>
              <button
                className="rc-btn rc-btn-primary"
                disabled={busy || selected.state !== 'ready'}
                onClick={() =>
                  void act(
                    'Start',
                    async () => {
                      if (!window.confirm('Start this campaign? Messages go through the active transport (currently demo mock).')) return;
                      await request({ type: 'campaign/start', id: selected.id });
                    },
                  )
                }
              >
                {t('queue.start')}
              </button>
              <button
                className="rc-btn"
                disabled={busy || selected.state !== 'running'}
                onClick={() => void act('Pause', () => request({ type: 'campaign/pause', id: selected.id }))}
              >
                {t('queue.pause')}
              </button>
              <button
                className="rc-btn"
                disabled={busy || selected.state !== 'paused'}
                onClick={() =>
                  void act(
                    'Resume',
                    async () => {
                      if (
                        !window.confirm(
                          `Resume "${selected.name}"? Remaining recipients: ${summary?.remaining ?? '?'}. Verify the message content and recipient list before resuming.`,
                        )
                      )
                        return;
                      await request({ type: 'campaign/resume', id: selected.id });
                    },
                  )
                }
              >
                {t('queue.resume')}
              </button>
              <button
                className="rc-btn rc-btn-danger"
                disabled={busy || !(selected.state === 'running' || selected.state === 'paused')}
                onClick={() => void act('Stop', () => request({ type: 'campaign/stop', id: selected.id }), true)}
              >
                {t('queue.stop')}
              </button>
              <button
                className="rc-btn"
                disabled={busy || !summary || summary.failed === 0 || selected.state === 'running'}
                onClick={() => void act('Retry failed', () => request({ type: 'campaign/retryFailed', id: selected.id }))}
              >
                {t('queue.retryFailed')} ({summary?.failed ?? 0})
              </button>
            </div>
          </section>

          <section className="rc-card">
            <h3>Per-recipient results</h3>
            {orderedResults.length === 0 ? (
              <div className="rc-empty">No attempts recorded yet.</div>
            ) : (
              <div style={{ maxHeight: 220, overflowY: 'auto' }}>
                <table className="rc-table">
                  <thead>
                    <tr><th>Contact</th><th>Status</th><th>When</th><th>Detail</th></tr>
                  </thead>
                  <tbody>
                    {orderedResults.map((r) => (
                      <tr key={r.contactId}>
                        <td>{r.contactId.slice(0, 8)}</td>
                        <td><span className="rc-badge">{r.status.replace(/_/g, ' ')}</span></td>
                        <td>{new Date(r.timestamp).toLocaleTimeString()}</td>
                        <td>{r.errorCode ?? ''}{r.errorMessage ? ` — ${r.errorMessage}` : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="rc-card">
            <h3>Structured event log</h3>
            {events.length === 0 ? (
              <div className="rc-empty">No events recorded yet.</div>
            ) : (
              <ol style={{ paddingLeft: 18, margin: 0, maxHeight: 180, overflowY: 'auto' }}>
                {[...events].reverse().slice(0, 120).map((ev) => (
                  <li key={ev.id} className="rc-devices-note">
                    <code>{new Date(ev.timestamp).toLocaleTimeString()}</code> <strong>{ev.type}</strong>{' '}
                    {ev.contactId !== '*' ? `(${ev.contactId.slice(0, 8)})` : ''} {ev.detail ?? ''}
                  </li>
                ))}
              </ol>
            )}
          </section>
        </>
      )}

      {confirmAction && (
        <div className="rc-card" role="alertdialog" aria-label="Confirm action">
          <h3>Confirm “{confirmAction.label}”</h3>
          <p>This affects an active campaign. Are you sure?</p>
          <div className="rc-row">
            <button className="rc-btn" onClick={() => setConfirmAction(null)}>Cancel</button>
            <button
              className="rc-btn rc-btn-danger"
              onClick={() => {
                const a = confirmAction;
                setConfirmAction(null);
                void a.run();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { STATE_LABEL };
export type { SessionSnapshot };

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Campaign, Contact, RecipientResult } from '../../types/domain';
import { request } from '../../lib/bridge';
import { buildReportRows, filterRows, reportToCsv, statusLabel, type ReportRow } from '../../lib/reports';
import { downloadTextFile } from '../../lib/importParser';

/**
 * Reports: campaign list with summary + per-recipient local result log,
 * filtering/search and CSV export. No delivery/read claims — statuses are
 * exactly what the queue recorded.
 */

export function ReportsScreen() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [results, setResults] = useState<RecipientResult[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<RecipientResult['status'] | 'all'>('all');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void request<Campaign[]>({ type: 'campaign/list' })
      .then((list) => {
        setCampaigns(list);
        if (list[0]) setSelectedId(list[0].id);
      })
      .catch((e) => setError(String(e)));
  }, []);

  const loadDetail = useCallback(async (id: string) => {
    if (!id) return;
    setLoading(true);
    try {
      const [r, c] = await Promise.all([
        request<RecipientResult[]>({ type: 'campaign/results', id }),
        request<Contact[]>({ type: 'contacts/list' }),
      ]);
      setResults(r);
      setContacts(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadDetail(selectedId);
  }, [selectedId, loadDetail]);

  const selected = campaigns.find((c) => c.id === selectedId);

  const rows: ReportRow[] = useMemo(() => {
    if (!selected) return [];
    const byId = new Map(contacts.map((c) => [c.id, c]));
    return buildReportRows(selected, results, byId);
  }, [selected, results, contacts]);

  const filtered = useMemo(() => filterRows(rows, query, status), [rows, query, status]);

  const summaryOf = useCallback(
    (c: Campaign): string => {
      const rs = c.id === selectedId ? results : [];
      if (c.id !== selectedId) return `${c.contactIds.length} recipients`;
      const sent = rs.filter((r) => r.status === 'sent').length;
      const skipped = rs.filter((r) => r.status.startsWith('skipped')).length;
      const failed = rs.filter((r) => r.status === 'failed').length;
      return `sent ${sent} · skipped ${skipped} · failed ${failed}`;
    },
    [selectedId, results],
  );

  return (
    <div>
      {error && <div className="rc-alert rc-alert-danger" role="alert">{error}</div>}

      <section className="rc-card">
        <h2>Campaigns</h2>
        {campaigns.length === 0 ? (
          <div className="rc-empty">No campaigns yet.</div>
        ) : (
          <table className="rc-table">
            <thead>
              <tr><th>Name</th><th>Date</th><th>Status</th><th>Recipients</th><th>Summary</th><th /></tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td><span className="rc-badge" data-state={c.state}>{c.state}</span></td>
                  <td>{c.contactIds.length}</td>
                  <td className="rc-devices-note">{summaryOf(c)}</td>
                  <td>
                    <button className="rc-btn" onClick={() => setSelectedId(c.id)} aria-label={`View report for ${c.name}`}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {selected && (
        <section className="rc-card">
          <h2>Results — {selected.name}</h2>
          <div className="rc-row">
            <input
              className="rc-input"
              style={{ flex: 2 }}
              type="search"
              placeholder="Search name, phone, error…"
              aria-label="Search results"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="rc-select"
              style={{ flex: 1 }}
              aria-label="Filter by status"
              value={status}
              onChange={(e) => setStatus(e.target.value as RecipientResult['status'] | 'all')}
            >
              <option value="all">All statuses</option>
              {(['queued', 'sent', 'skipped_suppression', 'skipped_invalid_number', 'failed'] as const).map((s) => (
                <option key={s} value={s}>{statusLabel(s)}</option>
              ))}
            </select>
            <button
              className="rc-btn rc-btn-primary"
              onClick={() => downloadTextFile(`report-${selected.name.replace(/\W+/g, '-')}.csv`, reportToCsv(filtered))}
              disabled={filtered.length === 0}
            >
              Export CSV
            </button>
          </div>
          {loading ? (
            <p role="status">Loading…</p>
          ) : filtered.length === 0 ? (
            <div className="rc-empty">No matching results.</div>
          ) : (
            <div style={{ maxHeight: 320, overflowY: 'auto', marginTop: 8 }}>
              <table className="rc-table">
                <thead>
                  <tr><th>Contact</th><th>Phone</th><th>Status</th><th>When</th><th>Detail</th></tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={`${r.normalizedPhone}-${i}`}>
                      <td>{r.contactName || '—'}</td>
                      <td>{r.normalizedPhone}</td>
                      <td><span className="rc-badge">{statusLabel(r.status)}</span></td>
                      <td>{new Date(r.timestampISO).toLocaleString()}</td>
                      <td className="rc-devices-note">{r.errorCode}{r.errorMessage ? ` — ${r.errorMessage}` : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="rc-devices-note">
            Statuses reflect only what the local queue recorded. This build does not verify message delivery or reads.
          </p>
        </section>
      )}
    </div>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SuppressionEntry } from '../../types/domain';
import { request } from '../../lib/bridge';
import { makeSuppressionEntry } from '../../lib/suppression';
import { parseCsv } from '../../lib/importParser';
import { useApp, t } from '../../panel/AppContext';

/**
 * Consent & suppression: permanent local blocklist with manual add, CSV import,
 * search and removal — plus the optional opt-out phrase matcher.
 */

export function SuppressionScreen() {
  const { settings } = useApp();
  const [entries, setEntries] = useState<SuppressionEntry[]>([]);
  const [query, setQuery] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(async () => {
    try {
      setEntries(await request<SuppressionEntry[]>({ type: 'suppression/list' }));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.phone.toLowerCase().includes(q) ||
        (e.normalizedPhone ?? '').toLowerCase().includes(q) ||
        e.reason.toLowerCase().includes(q),
    );
  }, [entries, query]);

  const addManual = async () => {
    if (!phone.trim()) {
      setError('Enter a phone number to suppress.');
      return;
    }
    setError(null);
    const entry = makeSuppressionEntry(phone, reason || 'manual', settings.defaultCountryCode as never);
    await request({ type: 'suppression/add', entry });
    setPhone('');
    setReason('');
    setNotice(`Suppressed ${entry.normalizedPhone ?? entry.phone}.`);
    await refresh();
  };

  const importCsv = async (file: File) => {
    try {
      const data = parseCsv(await file.text());
      const phoneCol =
        data.headers.find((h) => /phone|mobile|msisdn|number/i.test(h)) ?? data.headers[0];
        const reasonCol = data.headers.find((h) => /reason/i.test(h));
      if (!phoneCol) throw new Error('No phone column found in the CSV.');
      const newEntries: SuppressionEntry[] = [];
      for (const row of data.rows) {
        const p = (row[phoneCol] ?? '').trim();
        if (!p) continue;
        newEntries.push(makeSuppressionEntry(p, (reasonCol ? row[reasonCol] : '') || 'csv-import', settings.defaultCountryCode as never));
      }
      if (newEntries.length === 0) throw new Error('No rows with phone numbers were found.');
      await request({ type: 'suppression/addMany', entries: newEntries });
      setNotice(`Imported ${newEntries.length} entries (duplicates ignored).`);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const remove = async (entry: SuppressionEntry) => {
    if (!window.confirm(`Remove ${entry.normalizedPhone ?? entry.phone} from the suppression list?\nThey may receive future campaigns again.`)) return;
    await request({ type: 'suppression/remove', id: entry.id });
    await refresh();
  };

  return (
    <div>
      {error && <div className="rc-alert rc-alert-danger" role="alert">{error}</div>}
      {notice && <div className="rc-alert rc-alert-info" role="status">{notice}</div>}

      <section className="rc-card">
        <h2>Consent model</h2>
        <div className="rc-alert rc-alert-danger" role="alert">{t('warning.automation')}</div>
        <p>
          Relay Campaigns only starts campaigns after you attest that every recipient opted in. The suppression
          list below is <strong>permanent local protection</strong>: suppressed numbers are skipped on every future
          campaign, and the check runs again at send time even if a list was imported before suppression.
        </p>
      </section>

      <section className="rc-card">
        <h3>Add manually</h3>
        <div className="rc-grid-2">
          <div>
            <label className="rc-label" htmlFor="sup-phone">Phone *</label>
            <input
              id="sup-phone"
              className="rc-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={`+${settings.defaultCountryCode === 'US' ? '1 ' : ''}…`}
            />
          </div>
          <div>
            <label className="rc-label" htmlFor="sup-reason">Reason</label>
            <input id="sup-reason" className="rc-input" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="opted out via email" />
          </div>
        </div>
        <div className="rc-row" style={{ marginTop: 8 }}>
          <button className="rc-btn rc-btn-primary" onClick={() => void addManual()}>Add to suppression list</button>
          <button className="rc-btn" onClick={() => fileInputRef.current?.click()}>Import CSV…</button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,text/csv"
            style={{ display: 'none' }}
            aria-label="Import suppression list from CSV"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importCsv(f);
              e.target.value = '';
            }}
          />
        </div>
        <p className="rc-devices-note">CSV needs a phone column; an optional reason column is supported.</p>
      </section>

      <section className="rc-card">
        <div className="rc-row" style={{ justifyContent: 'space-between' }}>
          <h3 style={{ margin: 0 }}>Suppression list ({entries.length})</h3>
          <input
            className="rc-input"
            style={{ maxWidth: 220 }}
            type="search"
            aria-label="Search suppression list"
            placeholder="Search phone or reason…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {filtered.length === 0 ? (
          <div className="rc-empty" style={{ marginTop: 8 }}>
            {entries.length === 0 ? 'The suppression list is empty.' : 'No entries match your search.'}
          </div>
        ) : (
          <table className="rc-table" style={{ marginTop: 8 }}>
            <thead>
              <tr><th>Phone</th><th>Normalized</th><th>Reason</th><th>Added</th><th /></tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id}>
                  <td>{e.phone}</td>
                  <td>{e.normalizedPhone ?? '—'}</td>
                  <td>{e.reason}</td>
                  <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="rc-btn rc-btn-danger" onClick={() => void remove(e)} aria-label={`Unsuppress ${e.phone}`}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}


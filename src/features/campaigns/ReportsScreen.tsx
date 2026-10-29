import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Campaign, Contact, RecipientResult } from '../../types/domain';
import { request } from '../../lib/bridge';
import { buildReportRows, reportToCsv } from '../../lib/reports';
import { downloadTextFile } from '../../lib/importParser';

interface CampaignStats {
  campaign: Campaign;
  total: number;
  sent: number;
  failed: number;
  skipped: number;
  pending: number;
  results: RecipientResult[];
}

export function ReportsScreen() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [statsMap, setStatsMap] = useState<Record<string, CampaignStats>>({});
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [list, contactList] = await Promise.all([
        request<Campaign[]>({ type: 'campaign/list' }),
        request<Contact[]>({ type: 'contacts/list' }),
      ]);
      setCampaigns(list);
      setContacts(contactList);

      const stats: Record<string, CampaignStats> = {};
      await Promise.all(
        list.map(async (c) => {
          const results = await request<RecipientResult[]>({ type: 'campaign/results', id: c.id });
          const sent = results.filter((r) => r.status === 'sent').length;
          const failed = results.filter((r) => r.status === 'failed').length;
          const skipped = results.filter((r) => r.status.startsWith('skipped') || r.status.startsWith('blocked')).length;
          const total = c.contactIds.length;
          const pending = Math.max(0, total - (sent + failed + skipped));

          stats[c.id] = {
            campaign: c,
            total,
            sent,
            failed,
            skipped,
            pending,
            results,
          };
        }),
      );
      setStatsMap(stats);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  // Overall totals across all campaigns
  const overall = useMemo(() => {
    let attempted = 0;
    let sent = 0;
    let pending = 0;
    let skipped = 0;
    let failed = 0;

    for (const s of Object.values(statsMap)) {
      attempted += s.total;
      sent += s.sent;
      pending += s.pending;
      skipped += s.skipped;
      failed += s.failed;
    }

    return { attempted, sent, pending, skipped, failed };
  }, [statsMap]);

  const downloadCsv = (campaignId: string) => {
    const s = statsMap[campaignId];
    if (!s) return;
    const byId = new Map(contacts.map((c) => [c.id, c]));
    const rows = buildReportRows(s.campaign, s.results, byId);
    const csv = reportToCsv(rows);
    downloadTextFile(`${s.campaign.name || 'campaign'}-report.csv`, csv, 'text/csv;charset=utf-8');
  };

  const deleteCampaign = async (campaignId: string) => {
    if (!window.confirm('Are you sure you want to delete this campaign?')) return;
    try {
      await request({ type: 'campaign/delete', id: campaignId });
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div className="wa-reports-container">
      {error && (
        <div className="wa-alert wa-alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Total Summary Section */}
      <div className="wa-section-title">
        <span className="wa-icon">⚙</span> Total Summary
      </div>

      <div className="wa-summary-grid">
        <div className="wa-summary-card">
          <div className="wa-summary-label">↗ Attempted</div>
          <div className="wa-summary-value">{overall.attempted}</div>
        </div>

        <div className="wa-summary-card">
          <div className="wa-summary-label">🗹 Sent</div>
          <div className="wa-summary-value wa-val-success">{overall.sent}</div>
        </div>

        <div className="wa-summary-card">
          <div className="wa-summary-label">⌛ Pending</div>
          <div className="wa-summary-value wa-val-muted">{overall.pending}</div>
        </div>

        <div className="wa-summary-card">
          <div className="wa-summary-label">⊘ Skipped (opt-out)</div>
          <div className="wa-summary-value wa-val-danger">{overall.skipped}</div>
        </div>

        <div className="wa-summary-card">
          <div className="wa-summary-label">⤬ No. unavailable</div>
          <div className="wa-summary-value wa-val-warning">{overall.failed}</div>
        </div>
      </div>

      {/* Past Campaign Section */}
      <div className="wa-section-title" style={{ marginTop: '20px' }}>
        <span className="wa-icon">📅</span> Past Campaign
      </div>

      <div className="wa-card wa-table-card">
        {campaigns.length === 0 ? (
          <div className="wa-empty-state">
            {loading ? 'Loading past campaigns...' : 'No past campaigns yet. Send your first campaign!'}
          </div>
        ) : (
          <table className="wa-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Total</th>
                <th>Sent</th>
                <th>No. Unavailable</th>
                <th>Skipped (opt-out)</th>
                <th style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => {
                const s = statsMap[c.id];
                const total = s?.total ?? c.contactIds.length;
                const sent = s?.sent ?? 0;
                const failed = s?.failed ?? 0;
                const skipped = s?.skipped ?? 0;

                return (
                  <tr key={c.id}>
                    <td>
                      <div className="wa-campaign-cell">
                        <span className="wa-campaign-icon">💬</span>
                        <div>
                          <div className="wa-campaign-name">{c.name || 'Campaign'}</div>
                          <div className="wa-campaign-date">
                            {new Date(c.createdAt).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{total}</td>
                    <td className="wa-val-success" style={{ fontWeight: 600 }}>
                      {sent}
                    </td>
                    <td className="wa-val-warning" style={{ fontWeight: 600 }}>
                      {failed}
                    </td>
                    <td>{skipped > 0 ? skipped : '—'}</td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="wa-action-buttons">
                        <button
                          type="button"
                          className="wa-btn-icon"
                          title="Download CSV report"
                          onClick={() => downloadCsv(c.id)}
                        >
                          📥
                        </button>
                        <button
                          type="button"
                          className="wa-btn-icon"
                          title="Delete campaign"
                          onClick={() => deleteCampaign(c.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {campaigns.length > 0 && (
          <div className="wa-table-footer">
            <span>Showing 1-{campaigns.length} of {campaigns.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}

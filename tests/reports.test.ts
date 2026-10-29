import { describe, it, expect } from 'vitest';
import { buildReportRows, reportToCsv, statusLabel, filterRows } from '../src/lib/reports';
import type { Campaign, Contact, RecipientResult } from '../src/types/domain';

const campaign = { id: 'c1', name: 'October promo' } as Campaign;

const contact: Contact = {
  id: 'k1',
  phone: '+1 (415) 555-0101',
  normalizedPhone: '+14155550101',
  fields: { name: 'Ada' },
  consentStatus: 'opted_in',
  source: 'csv',
  createdAt: 0,
};

const results: RecipientResult[] = [
  { campaignId: 'c1', contactId: 'k1', status: 'sent', timestamp: 1730000000000 },
  { campaignId: 'c1', contactId: 'k2', status: 'skipped_suppression', timestamp: 1730000001000 },
  { campaignId: 'c1', contactId: 'k3', status: 'failed', timestamp: 1730000002000, errorCode: 'PAGE_ACK_TIMEOUT', errorMessage: 'timeout' },
];

const byId = new Map([[contact.id, contact]]);

describe('report building', () => {
  it('joins contacts onto results', () => {
    const rows = buildReportRows(campaign, results, byId);
    expect(rows[0].contactName).toBe('Ada');
    expect(rows[0].normalizedPhone).toBe('+14155550101');
    expect(rows[1].contactName).toBe(''); // unknown contact still reported
  });

  it('never claims delivery/read confirmation in labels', () => {
    const label = statusLabel('sent');
    expect(label.toLowerCase()).toContain('delivery not verified');
  });
});

describe('report CSV export', () => {
  it('has header + one line per row and quotes safely', () => {
    const csv = reportToCsv(buildReportRows(campaign, results, byId));
    const lines = csv.trim().split(/\r?\n/);
    expect(lines[0]).toMatch(/^campaign,contactName,phoneRaw/);
    expect(lines.length).toBe(4);
    expect(csv).toContain('Skipped — suppressed contact');
  });
});

describe('filterRows', () => {
  const rows = buildReportRows(campaign, results, byId);

  it('filters by status', () => {
    expect(filterRows(rows, '', 'failed').length).toBe(1);
    expect(filterRows(rows, '', 'all').length).toBe(3);
  });

  it('searches name, phone and error code', () => {
    expect(filterRows(rows, 'ada', 'all').length).toBe(1);
    expect(filterRows(rows, '4155550101', 'all').length).toBe(1);
    expect(filterRows(rows, 'TIMEOUT', 'all').length).toBe(1);
  });

  it('combines query + status', () => {
    expect(filterRows(rows, 'ada', 'failed').length).toBe(0);
  });
});

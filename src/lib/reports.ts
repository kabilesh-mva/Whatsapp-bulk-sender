import type { RecipientResult, Contact, Campaign } from '../types/domain';
import { toCsv } from './importParser';

/**
 * Report building + CSV export. Statuses are strictly what the queue actually
 * recorded — this build never claims delivery or read confirmation because the
 * mock transport cannot verify it and WhatsApp Web rules don't permit scraping it.
 */

export interface ReportRow {
  campaign: string;
  contactName: string;
  phoneRaw: string;
  normalizedPhone: string;
  status: RecipientResult['status'];
  timestampISO: string;
  errorCode: string;
  errorMessage: string;
}

const STATUS_LABEL: Record<RecipientResult['status'], string> = {
  queued: 'Queued',
  sent: 'Sent (accepted by transport; delivery not verified)',
  skipped_suppression: 'Skipped — suppressed contact',
  skipped_invalid_number: 'Skipped — invalid number',
  skipped_stopped: 'Skipped — campaign stopped before attempt',
  failed: 'Failed',
  blocked_optout: 'Blocked — opt-out phrase matched',
};

export function statusLabel(status: RecipientResult['status']): string {
  return STATUS_LABEL[status];
}

export function buildReportRows(
  campaign: Campaign,
  results: RecipientResult[],
  contactsById: Map<string, Contact>,
): ReportRow[] {
  return results.map((r) => {
    const c = contactsById.get(r.contactId);
    return {
      campaign: campaign.name,
      contactName: c?.fields['name'] ?? '',
      phoneRaw: c?.phone ?? '',
      normalizedPhone: c?.normalizedPhone ?? '',
      status: r.status,
      timestampISO: new Date(r.timestamp).toISOString(),
      errorCode: r.errorCode ?? '',
      errorMessage: r.errorMessage ?? '',
    };
  });
}

export function reportToCsv(rows: ReportRow[]): string {
  return toCsv(
    ['campaign', 'contactName', 'phoneRaw', 'normalizedPhone', 'status', 'timestampISO', 'errorCode', 'errorMessage'],
    rows.map((r) => [
      r.campaign,
      r.contactName,
      r.phoneRaw,
      r.normalizedPhone,
      `${r.status} (${statusLabel(r.status)})`,
      r.timestampISO,
      r.errorCode,
      r.errorMessage,
    ]),
  );
}

export function filterRows(rows: ReportRow[], query: string, status: RecipientResult['status'] | 'all'): ReportRow[] {
  const q = query.trim().toLowerCase();
  return rows.filter((r) => {
    if (status !== 'all' && r.status !== status) return false;
    if (!q) return true;
    return (
      r.contactName.toLowerCase().includes(q) ||
      r.phoneRaw.toLowerCase().includes(q) ||
      r.normalizedPhone.toLowerCase().includes(q) ||
      r.errorCode.toLowerCase().includes(q) ||
      r.errorMessage.toLowerCase().includes(q)
    );
  });
}

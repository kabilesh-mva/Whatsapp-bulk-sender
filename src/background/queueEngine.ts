import type { CountryCode } from 'libphonenumber-js';
import type {
  Campaign,
  Contact,
  MessagingAdapter,
  QueueEvent,
  QueueSummary,
  RecipientResult,
  SuppressionEntry,
} from '../../types/domain';
import { renderTemplate, contactVariableMap } from '../../lib/templateVars';
import { buildSuppressionIndex, isSuppressed } from '../../lib/suppression';

/**
 * Pure queue engine: decides what happens next for a campaign run.
 * All side effects (persistence, timers, transport calls) are injected via `deps`,
 * which makes the whole state machine unit-testable without chrome or DOM.
 */

export interface QueueDeps {
  adapter: Pick<MessagingAdapter, 'send' | 'isAvailable'>;
  getContacts: (ids: string[]) => Promise<Contact[]>;
  getResults: (campaignId: string) => Promise<RecipientResult[]>;
  saveResult: (r: RecipientResult) => Promise<void>;
  logEvent: (e: Omit<QueueEvent, 'id' | 'timestamp'> & { id?: string; timestamp?: number }) => Promise<void>;
  saveCampaign: (c: Campaign) => Promise<void>;
  loadSuppression: () => Promise<SuppressionEntry[]>;
  defaultCountry: CountryCode;
  random: () => number;
  now: () => number;
  /** session check before each attempt — never send blindly into a dead session */
  isSessionAlive: () => Promise<boolean>;
}

export function computeSummary(campaign: Campaign, results: RecipientResult[]): QueueSummary {
  const byContact = new Map(results.map((r) => [r.contactId, r]));
  let sent = 0;
  let skipped = 0;
  let failed = 0;
  let queued = 0;
  for (const id of campaign.contactIds) {
    const r = byContact.get(id);
    if (!r) queued++;
    else if (r.status === 'sent') sent++;
    else if (r.status === 'failed') failed++;
    else skipped++;
  }
  return {
    total: campaign.contactIds.length,
    queued,
    sent,
    skipped,
    failed,
    remaining: queued + failed,
  };
}

export interface StepOutcome {
  kind: 'sent' | 'skipped' | 'failed' | 'session_lost' | 'completed' | 'stopped';
  result?: RecipientResult;
  summary: QueueSummary;
}

/** Process exactly one recipient. Returns what happened plus the updated summary. */
export async function processNextRecipient(
  campaign: Campaign,
  contacts: Contact[],
  deps: QueueDeps,
): Promise<StepOutcome> {
  const results = await deps.getResults(campaign.id);
  const done = new Set(results.map((r) => r.contactId));
  const nextId = campaign.contactIds.find((id) => !done.has(id));

  if (!nextId) {
    const summary = computeSummary(campaign, results);
    return { kind: 'completed', summary };
  }

  const contact = contacts.find((c) => c.id === nextId);
  const base = { campaignId: campaign.id, contactId: nextId, timestamp: deps.now() };

  const record = async (r: RecipientResult, type: QueueEvent['type'], detail?: string): Promise<StepOutcome> => {
    await deps.saveResult(r);
    await deps.logEvent({ campaignId: campaign.id, contactId: nextId, type, detail });
    const fresh = await deps.getResults(campaign.id);
    return { kind: type === 'sent' ? 'sent' : type === 'failed' ? 'failed' : 'skipped', result: r, summary: computeSummary(campaign, fresh) };
  };

  if (!contact) {
    return record(
      { ...base, status: 'skipped_invalid_number', errorCode: 'CONTACT_MISSING', errorMessage: 'Contact no longer exists locally.' },
      'skipped',
      'contact missing',
    );
  }

  // Suppression check — permanent local blocklist always wins.
  const suppression = await deps.loadSuppression();
  const idx = buildSuppressionIndex(suppression, deps.defaultCountry);
  if (isSuppressed(contact, idx, deps.defaultCountry)) {
    return record(
      { ...base, status: 'skipped_suppression', errorCode: 'SUPPRESSED', errorMessage: 'Contact is on the local suppression list.' },
      'skipped',
      'suppressed',
    );
  }

  if (!contact.normalizedPhone) {
    return record(
      { ...base, status: 'skipped_invalid_number', errorCode: 'INVALID_NUMBER', errorMessage: 'Phone could not be normalized to E.164.' },
      'skipped',
      'invalid number',
    );
  }

  // Session guard: never continue after browser/WhatsApp session disappears.
  if (!(await deps.isSessionAlive())) {
    await deps.logEvent({ campaignId: campaign.id, contactId: nextId, type: 'session_lost', detail: 'Session unavailable; queue halted before attempt.' });
    const summary = computeSummary(campaign, results);
    return { kind: 'session_lost', summary };
  }

  await deps.logEvent({ campaignId: campaign.id, contactId: nextId, type: 'attempt_started' });

  const vars = contactVariableMap(contact.fields, contact.normalizedPhone);
  const rendered = renderTemplate(campaign.messageTemplate.body, vars);
  const outcome = await deps.adapter.send({
    toNormalizedPhone: contact.normalizedPhone,
    text: rendered.text,
    attachment: campaign.messageTemplate.attachment,
  });

  if (outcome.ok) {
    return record({ ...base, status: 'sent' }, 'sent');
  }
  return record(
    { ...base, status: 'failed', errorCode: outcome.errorCode, errorMessage: outcome.errorMessage },
    'failed',
    outcome.errorCode,
  );
}

/** Draw a delay between min and max from the campaign settings using the injected RNG. */
export function pickDelay(campaign: Campaign, random: () => number): number {
  const { minDelayMs, maxDelayMs } = campaign.settings;
  const lo = Math.max(0, Math.min(minDelayMs, maxDelayMs));
  const hi = Math.max(lo, Math.max(minDelayMs, maxDelayMs));
  return lo + random() * (hi - lo);
}

/** Reset failed recipients so they re-enter the queue on retry. */
export async function collectRetryable(campaign: Campaign, deps: QueueDeps): Promise<RecipientResult[]> {
  const results = await deps.getResults(campaign.id);
  return results.filter((r) => r.status === 'failed');
}

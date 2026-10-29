/**
 * Relay Campaigns — core domain models.
 * All data lives locally (chrome.storage.local + IndexedDB). Nothing leaves the machine.
 */

export type ConsentStatus = 'opted_in' | 'unknown' | 'opted_out';

export type ContactSource = 'csv' | 'xlsx' | 'manual';

export interface Contact {
  id: string;
  /** Raw phone as imported/entered by the operator. */
  phone: string;
  /** E.164 normalized phone, e.g. "+14155550101". Null when normalization failed. */
  normalizedPhone: string | null;
  /** Arbitrary imported fields (name, company, custom columns). Values are strings. */
  fields: Record<string, string>;
  consentStatus: ConsentStatus;
  source: ContactSource;
  createdAt: number;
}

/** Lifecycle of a campaign. Transitions are enforced by the queue state machine. */
export type CampaignState =
  | 'draft'
  | 'ready'
  | 'running'
  | 'paused'
  | 'completed'
  | 'stopped'
  | 'failed';

export interface AttachmentMetadata {
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  /** Data URL kept in IndexedDB so sending can run without re-upload prompts. */
  dataKey?: string;
}

export interface MessageTemplateContent {
  body: string;
  attachment?: AttachmentMetadata;
}

export interface CampaignSettings {
  minDelayMs: number;
  maxDelayMs: number;
  maxRecipients: number;
  requireFinalConfirmation: boolean;
  /** Operator attestation that recipients opted in. Required before start. */
  consentConfirmed: boolean;
  locale: string;
}

export interface Campaign {
  id: string;
  name: string;
  messageTemplate: MessageTemplateContent;
  contactIds: string[];
  state: CampaignState;
  settings: CampaignSettings;
  createdAt: number;
  startedAt: number | null;
  completedAt: number | null;
  /** Template id this campaign was seeded from, if any. */
  templateId?: string;
}

export type RecipientStatus =
  | 'queued'
  | 'sent'
  | 'skipped_suppression'
  | 'skipped_invalid_number'
  | 'skipped_stopped'
  | 'failed'
  | 'blocked_optout';

export interface RecipientResult {
  campaignId: string;
  contactId: string;
  status: RecipientStatus;
  timestamp: number;
  errorCode?: string;
  errorMessage?: string;
}

export interface Template {
  id: string;
  name: string;
  body: string;
  category: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export interface SuppressionEntry {
  id: string;
  phone: string;
  /** Normalized where possible; matching uses both raw digits and normalized forms. */
  normalizedPhone: string | null;
  reason: string;
  createdAt: number;
}

export interface QueueSettingsDefaults {
  minDelayMs: number;
  maxDelayMs: number;
  maxRecipients: number;
  requireFinalConfirmation: boolean;
}

/** Which transport the queue uses. `'mock'` NEVER sends real messages. */
export type AdapterKind = 'mock' | 'whatsapp-web';

export interface AppSettings {
  defaultCountryCode: string; // ISO-2, e.g. "US"
  locale: string; // e.g. "en"
  theme: 'light' | 'dark';
  queueDefaults: QueueSettingsDefaults;
  optOutPhrases: string[];
  optOutMatcherEnabled: boolean;
  /** Transport selection (settings screen). Defaults to the safe mock adapter. */
  adapter: AdapterKind;
}

/** Structured event recorded per recipient attempt for full transparency. */
export interface QueueEvent {
  id: string;
  campaignId: string;
  contactId: string;
  type:
    | 'queued'
    | 'attempt_started'
    | 'sent'
    | 'skipped'
    | 'failed'
    | 'state_changed'
    | 'session_lost';
  timestamp: number;
  detail?: string;
}

/** Counts surfaced in the queue UI. */
export interface QueueSummary {
  total: number;
  queued: number;
  sent: number;
  skipped: number;
  failed: number;
  remaining: number;
}

/* ---------------- Messaging adapter boundary ---------------- */

export interface OutgoingMessage {
  toNormalizedPhone: string;
  text: string;
  attachment?: AttachmentMetadata;
}

export type SendOutcome =
  | { ok: true }
  | { ok: false; retryable: boolean; errorCode: string; errorMessage: string };

/**
 * Narrow transport interface. The queue orchestrator only ever talks to this.
 * - MockMessagingAdapter: safe demo mode, no real messages.
 * - WhatsAppWebMessagingAdapter: isolated module bridging to a connected
 *   WhatsApp Web tab (see src/content/whatsappRuntime.ts). Can later be replaced
 *   by an official WhatsApp Business Platform adapter behind the same interface.
 */
export interface MessagingAdapter {
  readonly kind: AdapterKind;
  readonly label: string;
  isAvailable(): Promise<boolean>;
  send(message: OutgoingMessage): Promise<SendOutcome>;
}

/* ---------------- Runtime/session ---------------- */

export interface SessionSnapshot {
  whatsappTabConnected: boolean;
  loggedIn: boolean | null;
  lastCheckedAt: number | null;
}

/* ---------------- Import pipeline ---------------- */

export interface ParsedRow {
  rowIndex: number;
  raw: Record<string, string>;
}

export interface ImportIssue {
  rowIndex: number;
  kind: 'malformed' | 'duplicate' | 'invalid_phone' | 'missing_phone';
  message: string;
}

export interface ColumnMapping {
  phoneColumn: string;
  nameColumn?: string;
  companyColumn?: string;
  /** Remaining columns are carried through as custom fields automatically. */
}

export interface ImportPreview {
  headers: string[];
  rows: ParsedRow[];
  issues: ImportIssue[];
  validContacts: Contact[];
  duplicateCount: number;
  malformedCount: number;
  invalidPhoneCount: number;
}

/* ---------------- Bridge messages (content ⇄ background ⇄ panel) ---------------- */

export type BridgeRequest =
  | { type: 'campaign/list' }
  | { type: 'campaign/get'; id: string }
  | { type: 'campaign/saveDraft'; campaign: Campaign; contacts: Contact[] }
  | { type: 'campaign/markReady'; id: string }
  | { type: 'campaign/start'; id: string }
  | { type: 'campaign/pause'; id: string }
  | { type: 'campaign/resume'; id: string }
  | { type: 'campaign/stop'; id: string }
  | { type: 'campaign/retryFailed'; id: string }
  | { type: 'campaign/delete'; id: string }
  | { type: 'campaign/summary'; id: string }
  | { type: 'campaign/results'; id: string }
  | { type: 'campaign/events'; id: string }
  | { type: 'contacts/list'; ids?: string[] }
  | { type: 'template/list' }
  | { type: 'template/save'; template: Template }
  | { type: 'template/delete'; id: string }
  | { type: 'suppression/list' }
  | { type: 'suppression/add'; entry: SuppressionEntry }
  | { type: 'suppression/addMany'; entries: SuppressionEntry[] }
  | { type: 'suppression/remove'; id: string }
  | { type: 'settings/get' }
  | { type: 'settings/save'; settings: AppSettings }
  | { type: 'session/snapshot' }
  | { type: 'adapter/info' }
  | { type: 'data/deleteAll' }
  | { type: 'data/export' };

export type BridgeResponse =
  | { type: 'response'; ok: true; payload: unknown }
  | { type: 'response'; ok: false; error: string };

export type BridgeEvent =
  | { type: 'event'; name: 'queue:updated'; campaignId: string; state: CampaignState; summary: QueueSummary }
  | { type: 'event'; name: 'session:updated'; snapshot: SessionSnapshot };

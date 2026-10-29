import { openDB, type IDBPDatabase } from 'idb';
import type {
  AppSettings,
  Campaign,
  Contact,
  QueueEvent,
  RecipientResult,
  SuppressionEntry,
  Template,
} from '../types/domain';

/**
 * Local persistence layer.
 * - IndexedDB (relays campaigns DB): contacts, campaigns, results, events, templates, attachments.
 * - chrome.storage.local: settings + suppression list (small, synchronous-ish access from SW).
 * Everything stays on the device. No uploads.
 */

const DB_NAME = 'relay-campaigns';
const DB_VERSION = 1;

export const SETTINGS_STORAGE_KEY = 'relay:settings:v1';

export const DEFAULT_SETTINGS: AppSettings = {
  defaultCountryCode: 'US',
  locale: 'en',
  theme: 'light',
  queueDefaults: {
    minDelayMs: 30_000,
    maxDelayMs: 90_000,
    maxRecipients: 250,
    requireFinalConfirmation: true,
  },
  optOutPhrases: ['stop', 'unsubscribe', 'opt out', 'remove me'],
  optOutMatcherEnabled: false,
  adapter: 'mock',
};

let dbPromise: Promise<IDBPDatabase> | null = null;

export function getDb(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('contacts')) db.createObjectStore('contacts', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('campaigns')) db.createObjectStore('campaigns', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('results')) {
          const s = db.createObjectStore('results', { keyPath: ['campaignId', 'contactId'] });
          s.createIndex('byCampaign', 'campaignId');
        }
        if (!db.objectStoreNames.contains('events')) {
          const s = db.createObjectStore('events', { keyPath: 'id' });
          s.createIndex('byCampaign', 'campaignId');
        }
        if (!db.objectStoreNames.contains('templates')) db.createObjectStore('templates', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('attachments')) db.createObjectStore('attachments', { keyPath: 'key' });
      },
    });
  }
  return dbPromise;
}

/* ---------- Contacts ---------- */
export async function putContacts(contacts: Contact[]): Promise<void> {
  const db = await getDb();
  const tx = db.transaction('contacts', 'readwrite');
  await Promise.all([...contacts.map((c) => tx.store.put(c)), tx.done]);
}
export async function getContact(id: string): Promise<Contact | undefined> {
  const db = await getDb();
  return db.get('contacts', id);
}
export async function getContactsByIds(ids: string[]): Promise<Contact[]> {
  const db = await getDb();
  const tx = db.transaction('contacts');
  const out: Contact[] = [];
  for (const id of ids) {
    const v = await tx.store.get(id);
    if (v) out.push(v as Contact);
  }
  await tx.done;
  return out;
}
export async function getAllContacts(): Promise<Contact[]> {
  const db = await getDb();
  return db.getAll('contacts') as Promise<Contact[]>;
}

/* ---------- Campaigns ---------- */
export async function putCampaign(campaign: Campaign): Promise<void> {
  const db = await getDb();
  await db.put('campaigns', campaign);
}
export async function getCampaign(id: string): Promise<Campaign | undefined> {
  const db = await getDb();
  return db.get('campaigns', id) as Promise<Campaign | undefined>;
}
export async function listCampaigns(): Promise<Campaign[]> {
  const db = await getDb();
  const all = (await db.getAll('campaigns')) as Campaign[];
  return all.sort((a, b) => b.createdAt - a.createdAt);
}
export async function deleteCampaign(id: string): Promise<void> {
  const db = await getDb();
  const txResults = db.transaction('results', 'readwrite');
  let cursor = await txResults.index('byCampaign').openCursor(IDBKeyRange.only(id));
  while (cursor) {
    await cursor.delete();
    cursor = await cursor.continue();
  }
  await txResults.done;
  const txEvents = db.transaction('events', 'readwrite');
  let ec = await txEvents.index('byCampaign').openCursor(IDBKeyRange.only(id));
  while (ec) {
    await ec.delete();
    ec = await ec.continue();
  }
  await txEvents.done;
  await db.delete('campaigns', id);
}

/* ---------- Results ---------- */
export async function putResult(result: RecipientResult): Promise<void> {
  const db = await getDb();
  await db.put('results', result);
}
export async function getResultsForCampaign(campaignId: string): Promise<RecipientResult[]> {
  const db = await getDb();
  const all = (await db.getAllFromIndex('results', 'byCampaign', campaignId)) as RecipientResult[];
  return all.sort((a, b) => a.timestamp - b.timestamp);
}
export async function getResult(campaignId: string, contactId: string): Promise<RecipientResult | undefined> {
  const db = await getDb();
  return db.get('results', [campaignId, contactId]) as Promise<RecipientResult | undefined>;
}

/* ---------- Events ---------- */
export async function addEvent(event: QueueEvent): Promise<void> {
  const db = await getDb();
  await db.put('events', event);
}
export async function getEventsForCampaign(campaignId: string): Promise<QueueEvent[]> {
  const db = await getDb();
  const all = (await db.getAllFromIndex('events', 'byCampaign', campaignId)) as QueueEvent[];
  return all.sort((a, b) => a.timestamp - b.timestamp);
}

/* ---------- Templates ---------- */
export async function putTemplate(template: Template): Promise<void> {
  const db = await getDb();
  await db.put('templates', template);
}
export async function listTemplates(): Promise<Template[]> {
  const db = await getDb();
  const all = (await db.getAll('templates')) as Template[];
  return all.sort((a, b) => b.updatedAt - a.updatedAt);
}
export async function deleteTemplate(id: string): Promise<void> {
  const db = await getDb();
  await db.delete('templates', id);
}

/* ---------- Attachments (data URLs in IndexedDB, not storage.local) ---------- */
export async function putAttachment(key: string, dataUrl: string): Promise<void> {
  const db = await getDb();
  await db.put('attachments', { key, dataUrl });
}
export async function getAttachment(key: string): Promise<string | undefined> {
  const db = await getDb();
  const rec = (await db.get('attachments', key)) as { key: string; dataUrl: string } | undefined;
  return rec?.dataUrl;
}

/* ---------- Settings (chrome.storage.local with in-memory fallback for tests/dev tab) ---------- */
const hasChromeStorage = (): boolean =>
  typeof chrome !== 'undefined' && !!chrome.storage && !!chrome.storage.local;

let memoryFallback: Record<string, unknown> = {};

export async function loadSettings(): Promise<AppSettings> {
  if (hasChromeStorage()) {
    const res = await chrome.storage.local.get(SETTINGS_STORAGE_KEY);
    const raw = res[SETTINGS_STORAGE_KEY] as Partial<AppSettings> | undefined;
    return mergeSettings(DEFAULT_SETTINGS, raw);
  }
  return mergeSettings(DEFAULT_SETTINGS, memoryFallback[SETTINGS_STORAGE_KEY] as Partial<AppSettings>);
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  if (hasChromeStorage()) {
    await chrome.storage.local.set({ [SETTINGS_STORAGE_KEY]: settings });
  } else {
    memoryFallback[SETTINGS_STORAGE_KEY] = settings;
  }
}

function mergeSettings(base: AppSettings, raw?: Partial<AppSettings>): AppSettings {
  if (!raw) return { ...base, queueDefaults: { ...base.queueDefaults } };
  return {
    ...base,
    ...raw,
    queueDefaults: { ...base.queueDefaults, ...(raw.queueDefaults ?? {}) },
    optOutPhrases: raw.optOutPhrases ?? base.optOutPhrases,
    adapter: raw.adapter === 'whatsapp-web' ? 'whatsapp-web' : 'mock',
  };
}

/* ---------- Suppression list (chrome.storage.local — permanent local blocklist) ---------- */
const SUPPRESSION_STORAGE_KEY = 'relay:suppression:v1';

export async function loadSuppression(): Promise<SuppressionEntry[]> {
  if (hasChromeStorage()) {
    const res = await chrome.storage.local.get(SUPPRESSION_STORAGE_KEY);
    return (res[SUPPRESSION_STORAGE_KEY] as SuppressionEntry[] | undefined) ?? [];
  }
  return (memoryFallback[SUPPRESSION_STORAGE_KEY] as SuppressionEntry[] | undefined) ?? [];
}

export async function saveSuppression(entries: SuppressionEntry[]): Promise<void> {
  if (hasChromeStorage()) {
    await chrome.storage.local.set({ [SUPPRESSION_STORAGE_KEY]: entries });
  } else {
    memoryFallback[SUPPRESSION_STORAGE_KEY] = entries;
  }
}

/* ---------- Delete everything ---------- */
export async function deleteAllLocalData(): Promise<void> {
  const db = await getDb();
  await Promise.all(
    ['contacts', 'campaigns', 'results', 'events', 'templates', 'attachments'].map((name) =>
      db.transaction(name, 'readwrite').store.clear(),
    ),
  );
  if (hasChromeStorage()) {
    await chrome.storage.local.remove([SETTINGS_STORAGE_KEY, SUPPRESSION_STORAGE_KEY]);
  } else {
    memoryFallback = {};
  }
}

/** Export a snapshot of all local data as a JSON-serializable object. */
export async function exportAllLocalData(): Promise<Record<string, unknown>> {
  const [contacts, campaigns, templates, suppression] = await Promise.all([
    getAllContacts(),
    listCampaigns(),
    listTemplates(),
    loadSuppression(),
  ]);
  const results: Record<string, RecipientResult[]> = {};
  for (const c of campaigns) results[c.id] = await getResultsForCampaign(c.id);
  return { exportedAt: new Date().toISOString(), contacts, campaigns, templates, suppression, results };
}

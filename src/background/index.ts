import type { CountryCode } from 'libphonenumber-js';
import type {
  AppSettings,
  BridgeEvent,
  BridgeRequest,
  BridgeResponse,
  Campaign,
  QueueEvent,
  QueueSummary,
  SessionSnapshot,
} from '../types/domain';
import {
  getCampaign,
  getContactsByIds,
  getResultsForCampaign,
  loadSettings,
  putCampaign,
  saveSettings,
  deleteAllLocalData,
  exportAllLocalData,
  listCampaigns,
  putResult,
  addEvent,
  getEventsForCampaign,
  loadSuppression,
  saveSuppression,
  listTemplates,
  putTemplate,
  deleteTemplate,
  getAllContacts,
  putContacts,
  deleteCampaign,
} from '../lib/db';
import { MockMessagingAdapter, WhatsAppWebMessagingAdapter } from '../lib/adapters/mockAdapter';
import type { MessagingAdapter, OutgoingMessage } from '../types/domain';
import { computeSummary, pickDelay, processNextRecipient, type QueueDeps } from './queueEngine';
import { assertTransition, canApplyIntent, validateStart, type QueueIntent } from './stateMachine';

/**
 * Service worker: owns campaign state, runs the queue loop, and answers bridge
 * requests from the panel/popup. The transport is selected in Settings → Transport:
 * 'mock' (default, never sends) or 'whatsapp-web' (bridges to a connected tab).
 */

const mockAdapter = new MockMessagingAdapter({ latencyMs: [50, 150] });

/* ---------------- WhatsApp Web bridge (isolated transport integration) ----------------
 * Everything that touches a WhatsApp Web tab lives behind this narrow interface so it
 * can be swapped for an official WhatsApp Business Platform adapter later. The content
 * script keeps a long-lived port ('whatsapp-session'); while any port is open we know
 * a tab exists, and sends are routed to it awaiting a real page acknowledgement.
 * -------------------------------------------------------------------------------------- */
interface WaSessionPort {
  postMessage: (m: unknown) => void;
  onMessage: chrome.events.Event<(m: unknown) => void>;
  onDisconnect: chrome.events.Event<() => void>;
}

class ChromeWhatsAppWebBridge implements WhatsAppWebBridgeLike {
  private ports = new Set<WaSessionPort>();
  private pending = new Map<string, { resolve: (v: SendAck) => void; timer: ReturnType<typeof setTimeout> }>();
  private nextTabId = 1;

  constructor() {
    chrome.runtime.onConnect.addListener((raw) => {
      const port = raw as unknown as WaSessionPort & { sender?: { tab?: { id?: number } }; name: string };
      if (port.name !== 'whatsapp-session') return;
      const tabId = this.nextTabId++;
      try {
        port.postMessage({ type: 'relay:assign-tab', tabId });
      } catch {
        /* tab may already be closing */
      }
      this.ports.add(port);
      port.onMessage.addListener((m) => this.handlePageMessage(m));
      port.onDisconnect.addListener(() => {
        this.ports.delete(port);
        runtime.session.whatsappTabConnected = this.ports.size > 0;
        runtime.session.loggedIn = null;
        // Session loss must halt the queue transparently — never keep "sending" blind.
        if (runtime.runningCampaignId) runtime.pauseRequested = true;
        broadcast({ type: 'event', name: 'session:updated', snapshot: runtime.session });
      });
      runtime.session.whatsappTabConnected = true;
      runtime.session.lastCheckedAt = Date.now();
      broadcast({ type: 'event', name: 'session:updated', snapshot: runtime.session });
    });
  }

  private handlePageMessage(m: unknown): void {
    const msg = m as
      | { type: 'session:state'; loggedIn?: boolean | null }
      | { type: 'send:ack'; ackId?: string; ok?: boolean; errorCode?: string; errorMessage?: string };
    if (!msg || typeof msg !== 'object') return;
    if (msg.type === 'session:state') {
      runtime.session.loggedIn = msg.loggedIn ?? null;
      broadcast({ type: 'event', name: 'session:updated', snapshot: runtime.session });
      return;
    }
    if (msg.type === 'send:ack' && msg.ackId) {
      const p = this.pending.get(msg.ackId);
      if (!p) return;
      clearTimeout(p.timer);
      this.pending.delete(msg.ackId);
      p.resolve({ ok: !!msg.ok, errorCode: msg.errorCode, errorMessage: msg.errorMessage });
    }
  }

  isTabConnected(): boolean {
    return this.ports.size > 0;
  }

  dispatch(message: OutgoingMessage): Promise<SendAck> {
    const target = [...this.ports][0];
    if (!target) return Promise.resolve({ ok: false, errorCode: 'ADAPTER_UNAVAILABLE', errorMessage: 'No connected WhatsApp Web tab.' });
    const ackId = crypto.randomUUID();
    return new Promise<SendAck>((resolve) => {
      const timer = setTimeout(() => {
        this.pending.delete(ackId);
        resolve({ ok: false, errorCode: 'PAGE_ACK_TIMEOUT', errorMessage: 'WhatsApp Web did not acknowledge the message in time. It may or may not have been delivered — check the chat before retrying.' });
      }, SEND_ACK_TIMEOUT_MS);
      this.pending.set(ackId, { resolve, timer });
      try {
        target.postMessage({ type: 'relay:send', ackId, message });
      } catch (e) {
        clearTimeout(timer);
        this.pending.delete(ackId);
        resolve({ ok: false, errorCode: 'PORT_DEAD', errorMessage: e instanceof Error ? e.message : String(e) });
      }
    });
  }
}

interface SendAck {
  ok: boolean;
  errorCode?: string;
  errorMessage?: string;
}

type WhatsAppWebBridgeLike = {
  isTabConnected(): boolean;
  dispatch(message: OutgoingMessage): Promise<SendAck>;
};

const SEND_ACK_TIMEOUT_MS = 30_000;
const waBridge = new ChromeWhatsAppWebBridge();
const whatsappWebAdapter = new WhatsAppWebMessagingAdapter(waBridge);

async function activeAdapter(): Promise<MessagingAdapter> {
  const settings = await loadSettings();
  return settings.adapter === 'whatsapp-web' ? whatsappWebAdapter : mockAdapter;
}

async function adapterInfo(): Promise<{ kind: MessagingAdapter['kind']; label: string; available: boolean; session: SessionSnapshot }> {
  const adapter = await activeAdapter();
  return { kind: adapter.kind, label: adapter.label, available: await adapter.isAvailable(), session: runtime.session };
}

interface RuntimeState {
  runningCampaignId: string | null;
  cancelRequested: boolean;
  pauseRequested: boolean;
  session: SessionSnapshot;
}

const runtime: RuntimeState = {
  runningCampaignId: null,
  cancelRequested: false,
  pauseRequested: false,
  session: { whatsappTabConnected: false, loggedIn: null, lastCheckedAt: null },
};

/* ---------------- event fan-out ---------------- */

function broadcast(evt: BridgeEvent): void {
  chrome.runtime.sendMessage(evt).catch(() => {
    /* no listeners — fine */
  });
}

async function emitSummary(campaign: Campaign): Promise<QueueSummary> {
  const results = await getResultsForCampaign(campaign.id);
  const summary = computeSummary(campaign, results);
  broadcast({ type: 'event', name: 'queue:updated', campaignId: campaign.id, state: campaign.state, summary });
  return summary;
}

/* ---------------- queue loop ---------------- */

let wakeAlarmSeen = 0;

async function buildDeps(settings: AppSettings): Promise<QueueDeps> {
  const adapter = settings.adapter === 'whatsapp-web' ? whatsappWebAdapter : mockAdapter;
  return {
    adapter,
    getContacts: getContactsByIds,
    getResults: getResultsForCampaign,
    saveResult: putResult,
    logEvent: async (e) => {
      await addEvent({ ...e, id: crypto.randomUUID(), timestamp: e.timestamp ?? Date.now() } as QueueEvent);
    },
    saveCampaign: putCampaign,
    loadSuppression,
    defaultCountry: settings.defaultCountryCode as CountryCode,
    random: Math.random,
    now: Date.now,
    isSessionAlive: async () => {
      // Mock transport works without a WhatsApp tab (pure browser/dev usage).
      if (settings.adapter !== 'whatsapp-web') return true;
      // Real transport: require a connected tab. Never send blindly into a dead session.
      return waBridge.isTabConnected();
    },
  };
}

async function runQueueLoop(campaignId: string): Promise<void> {
  if (runtime.runningCampaignId && runtime.runningCampaignId !== campaignId) return;
  runtime.runningCampaignId = campaignId;
  runtime.cancelRequested = false;
  runtime.pauseRequested = false;

  try {
    for (;;) {
      const campaign = await getCampaign(campaignId);
      if (!campaign) break;
      if (runtime.cancelRequested) {
        await transition(campaign, 'stopped');
        break;
      }
      if (runtime.pauseRequested) {
        await transition(campaign, 'paused');
        break;
      }
      if (campaign.state !== 'running') break;

      const settings = await loadSettings();
      const deps = await buildDeps(settings);
      const contacts = await getContactsByIds(campaign.contactIds);
      const outcome = await processNextRecipient(campaign, contacts, deps);

      if (outcome.kind === 'session_lost') {
        // Never silently continue: park as paused and tell the operator why.
        const c2 = await getCampaign(campaignId);
        if (c2 && c2.state === 'running') await transition(c2, 'paused');
        break;
      }
      if (outcome.kind === 'completed') {
        const c2 = await getCampaign(campaignId);
        if (c2) {
          c2.completedAt = Date.now();
          await transition(c2, 'completed');
        }
        break;
      }

      const delay = Math.round(pickDelay(campaign, Math.random));
      await interruptibleSleep(delay, campaignId);
    }
  } finally {
    if (runtime.runningCampaignId === campaignId) runtime.runningCampaignId = null;
  }
}

function interruptibleSleep(ms: number, campaignId: string): Promise<void> {
  return new Promise((resolve) => {
    const start = Date.now();
    let remaining = ms;
    const tick = () => {
      if (runtime.cancelRequested || runtime.pauseRequested || runtime.runningCampaignId !== campaignId) {
        resolve();
        return;
      }
      remaining = ms - (Date.now() - start);
      if (remaining <= 0) {
        resolve();
        return;
      }
      setTimeout(tick, Math.min(remaining, 1000));
    };
    setTimeout(tick, Math.min(remaining, 1000));
  });
}

async function transition(campaign: Campaign, to: Campaign['state']): Promise<void> {
  assertTransition(campaign.state, to);
  const updated: Campaign = { ...campaign, state: to };
  if (to === 'running' && !updated.startedAt) updated.startedAt = Date.now();
  if (to === 'completed') updated.completedAt = updated.completedAt ?? Date.now();
  await putCampaign(updated);
  await addEvent({
    id: crypto.randomUUID(),
    campaignId: campaign.id,
    contactId: '*',
    type: 'state_changed',
    timestamp: Date.now(),
    detail: `${campaign.state} -> ${to}`,
  });
  await emitSummary(updated);
}

/* ---------------- intent handlers ---------------- */

async function handleIntent(id: string, intent: QueueIntent): Promise<unknown> {
  const campaign = await getCampaign(id);
  if (!campaign) throw new Error('Campaign not found');
  if (!canApplyIntent(campaign.state, intent)) {
    throw new Error(`Cannot ${intent} a campaign in state "${campaign.state}".`);
  }

  switch (intent) {
    case 'markReady': {
      const settings = await loadSettings();
      const errors = validateStart({
        consentConfirmed: campaign.settings.consentConfirmed,
        requireFinalConfirmation: campaign.settings.requireFinalConfirmation,
        finalConfirmationGiven: true,
        recipientCount: campaign.contactIds.length,
        maxRecipients: Math.min(settings.queueDefaults.maxRecipients, campaign.settings.maxRecipients),
        adapterAvailable: await (await activeAdapter()).isAvailable(),
      });
      if (errors.length) throw new Error(errors.join(' '));
      await transition(campaign, 'ready');
      return { ok: true };
    }
    case 'start': {
      const settings = await loadSettings();
      const errors = validateStart({
        consentConfirmed: campaign.settings.consentConfirmed,
        requireFinalConfirmation: campaign.settings.requireFinalConfirmation,
        finalConfirmationGiven: true,
        recipientCount: campaign.contactIds.length,
        maxRecipients: Math.min(settings.queueDefaults.maxRecipients, campaign.settings.maxRecipients),
        adapterAvailable: await (await activeAdapter()).isAvailable(),
      });
      if (errors.length) throw new Error(errors.join(' '));
      await transition(campaign, 'running');
      void runQueueLoop(campaign.id);
      return { ok: true };
    }
    case 'pause': {
      runtime.pauseRequested = true;
      // If the loop isn't active (e.g., re-attach after SW restart), transition directly.
      if (!runtime.runningCampaignId) await transition(campaign, 'paused');
      return { ok: true };
    }
    case 'resume': {
      const c = await getCampaign(id);
      if (!c) throw new Error('Campaign not found');
      await transition(c, 'running');
      void runQueueLoop(c.id);
      return { ok: true };
    }
    case 'stop': {
      runtime.cancelRequested = true;
      if (!runtime.runningCampaignId) await transition(campaign, 'stopped');
      return { ok: true };
    }
    case 'retryFailed': {
      const results = await getResultsForCampaign(id);
      const failed = results.filter((r) => r.status === 'failed');
      if (failed.length === 0) return { ok: true, retried: 0 };
      // Clear failed rows so the engine re-queues those contacts.
      for (const f of failed) {
        await putResult({ ...f, status: 'queued', errorCode: undefined, errorMessage: undefined, timestamp: Date.now() });
      }
      // Remove queued placeholder by deleting instead: simpler to delete then let engine redo.
      const c = await getCampaign(id);
      if (!c) throw new Error('Campaign not found');
      if (c.state !== 'running') {
        await transition(c, 'running');
      }
      void runQueueLoop(c.id);
      return { ok: true, retried: failed.length };
    }
    case 'backToDraft': {
      await transition(campaign, 'draft');
      return { ok: true };
    }
  }
}

/* ---------------- request router ---------------- */

async function handle(req: BridgeRequest): Promise<unknown> {
  switch (req.type) {
    case 'campaign/list':
      return listCampaigns();
    case 'campaign/get':
      return getCampaign(req.id);
    case 'campaign/saveDraft': {
      const { campaign, contacts } = req;
      const existing = await getCampaign(campaign.id);
      const next: Campaign = { ...campaign, createdAt: existing?.createdAt ?? campaign.createdAt };
      if (existing && existing.state !== campaign.state) assertTransition(existing.state, campaign.state);
      await putContacts(contacts);
      await putCampaign(next);
      return next;
    }
    case 'campaign/markReady':
      return handleIntent(req.id, 'markReady');
    case 'campaign/start':
      return handleIntent(req.id, 'start');
    case 'campaign/pause':
      return handleIntent(req.id, 'pause');
    case 'campaign/resume':
      return handleIntent(req.id, 'resume');
    case 'campaign/stop':
      return handleIntent(req.id, 'stop');
    case 'campaign/retryFailed':
      return handleIntent(req.id, 'retryFailed');
    case 'campaign/delete':
      return (async () => {
        await deleteCampaign(req.id);
        return { ok: true };
      })();
    case 'campaign/summary': {
      const c = await getCampaign(req.id);
      if (!c) throw new Error('Campaign not found');
      return emitSummary(c);
    }
    case 'campaign/results':
      return getResultsForCampaign(req.id);
    case 'campaign/events':
      return getEventsForCampaign(req.id);
    case 'contacts/list':
      return req.ids ? getContactsByIds(req.ids) : getAllContacts();
    case 'template/list':
      return listTemplates();
    case 'template/save':
      return (async () => {
        await putTemplate(req.template);
        return req.template;
      })();
    case 'template/delete':
      return (async () => {
        await deleteTemplate(req.id);
        return { ok: true };
      })();
    case 'suppression/list':
      return loadSuppression();
    case 'suppression/add':
      return (async () => {
        const all = await loadSuppression();
        all.push(req.entry);
        await saveSuppression(all);
        return all;
      })();
    case 'suppression/addMany':
      return (async () => {
        const all = await loadSuppression();
        const seen = new Set(all.map((e) => e.normalizedPhone ?? e.phone));
        for (const e of req.entries) {
          const key = e.normalizedPhone ?? e.phone;
          if (!seen.has(key)) {
            all.push(e);
            seen.add(key);
          }
        }
        await saveSuppression(all);
        return all;
      })();
    case 'suppression/remove':
      return (async () => {
        const all = (await loadSuppression()).filter((e) => e.id !== req.id);
        await saveSuppression(all);
        return all;
      })();
    case 'settings/get':
      return loadSettings();
    case 'settings/save':
      return (async () => {
        await saveSettings(req.settings);
        return req.settings;
      })();
    case 'session/snapshot':
      return { ...runtime.session, lastCheckedAt: Date.now() };
    case 'adapter/info':
      return adapterInfo();
    case 'data/deleteAll':
      return (async () => {
        runtime.cancelRequested = true;
        await deleteAllLocalData();
        return { ok: true };
      })();
    case 'data/export':
      return exportAllLocalData();
    default: {
      const _exhaustive: never = req;
      return _exhaustive;
    }
  }
}

/* ---------------- wiring ---------------- */

chrome.runtime.onMessage.addListener(
  (msg: BridgeRequest | { type: 'content:hello' } | { type: 'session:update'; snapshot: Partial<SessionSnapshot> }, _sender, sendResponse: (r: BridgeResponse) => void) => {
    if (msg.type === 'content:hello') {
      runtime.session.whatsappTabConnected = true;
      runtime.session.lastCheckedAt = Date.now();
      broadcast({ type: 'event', name: 'session:updated', snapshot: runtime.session });
      sendResponse({ type: 'response', ok: true, payload: { ok: true } });
      return false;
    }
    if (msg.type === 'session:update') {
      runtime.session = { ...runtime.session, ...msg.snapshot, lastCheckedAt: Date.now() };
      broadcast({ type: 'event', name: 'session:updated', snapshot: runtime.session });
      sendResponse({ type: 'response', ok: true, payload: runtime.session });
      return false;
    }
    const req = msg as BridgeRequest;
    handle(req)
      .then((payload) => sendResponse({ type: 'response', ok: true, payload }))
      .catch((err: unknown) =>
        sendResponse({ type: 'response', ok: false, error: err instanceof Error ? err.message : String(err) }),
      );
    return true; // keep the message channel open for the async response
  },
);

// Alarm keeps the SW eligible to wake; the loop itself lives while the SW is alive.
chrome.alarms.create?.('relay:heartbeat', { periodInMinutes: 1 });
chrome.alarms.onAlarm?.addListener(() => {
  wakeAlarmSeen++;
  // Re-arm an interrupted run conservatively: only resume if it was 'running' and a tab is connected.
  void (async () => {
    const campaigns = await listCampaigns();
    const running = campaigns.find((c) => c.state === 'running');
    if (running && !runtime.runningCampaignId && waBridge.isTabConnected()) {
      void runQueueLoop(running.id);
    }
  })();
});

chrome.action?.onClicked?.addListener(async () => {
  const tabs = await chrome.tabs.query({ url: 'https://web.whatsapp.com/*' });
  if (tabs[0]?.id != null) {
    await chrome.tabs.update(tabs[0].id, { active: true });
    if (tabs[0].windowId != null) {
      await chrome.windows.update?.(tabs[0].windowId, { focused: true });
    }
    // Ask the content script to open the panel.
    void chrome.tabs.sendMessage(tabs[0].id, { type: 'relay:toggle-panel' }).catch(() => undefined);
  } else {
    await chrome.tabs.create({ url: 'https://web.whatsapp.com/' });
  }
});

export type { QueueSummary };

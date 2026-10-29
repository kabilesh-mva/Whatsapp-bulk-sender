/**
 * localEngine — dev/test fallback that mirrors the background service worker's
 * behavior inside a normal browser tab (no chrome.runtime available).
 * It reuses the same pure modules: db (with memory fallback for settings/suppression),
 * state machine, queue engine and mock adapter. This is what powers `npm run dev`.
 */
import type { CountryCode } from 'libphonenumber-js';
import type {
  AppSettings,
  BridgeEvent,
  BridgeRequest,
  Campaign,
  QueueEvent,
  QueueSummary,
} from '../types/domain';
import { MockMessagingAdapter } from './adapters/mockAdapter';
import {
  addEvent,
  deleteAllLocalData,
  deleteCampaign,
  deleteTemplate,
  exportAllLocalData,
  getCampaign,
  getContactsByIds,
  getAllContacts,
  getEventsForCampaign,
  getResultsForCampaign,
  listCampaigns,
  listTemplates,
  loadSettings,
  loadSuppression,
  putCampaign,
  putContacts,
  putResult,
  putTemplate,
  saveSettings,
  saveSuppression,
} from './db';
import { computeSummary, pickDelay, processNextRecipient, type QueueDeps } from '../background/queueEngine';
import { assertTransition, canApplyIntent, validateStart, type QueueIntent } from '../background/stateMachine';

const adapter = new MockMessagingAdapter({ latencyMs: [80, 220] });

interface LocalRuntime {
  runningCampaignId: string | null;
  cancelRequested: boolean;
  pauseRequested: boolean;
}

const runtime: LocalRuntime = { runningCampaignId: null, cancelRequested: false, pauseRequested: false };

type Listener = (evt: BridgeEvent) => void;
const listeners = new Set<Listener>();

function broadcast(evt: BridgeEvent): void {
  for (const l of listeners) l(evt);
}

async function emitSummary(campaign: Campaign): Promise<QueueSummary> {
  const results = await getResultsForCampaign(campaign.id);
  const summary = computeSummary(campaign, results);
  broadcast({ type: 'event', name: 'queue:updated', campaignId: campaign.id, state: campaign.state, summary });
  return summary;
}

async function buildDeps(settings: AppSettings): Promise<QueueDeps> {
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
    isSessionAlive: async () => true, // demo tab mode always has a "session"
  };
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

function interruptibleSleep(ms: number, campaignId: string): Promise<void> {
  return new Promise((resolve) => {
    const start = Date.now();
    const tick = () => {
      if (runtime.cancelRequested || runtime.pauseRequested || runtime.runningCampaignId !== campaignId) return resolve();
      if (Date.now() - start >= ms) return resolve();
      setTimeout(tick, Math.min(250, ms));
    };
    setTimeout(tick, Math.min(250, ms));
  });
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
        if (campaign.state === 'running') await transition(campaign, 'stopped');
        break;
      }
      if (runtime.pauseRequested) {
        if (campaign.state === 'running') await transition(campaign, 'paused');
        break;
      }
      if (campaign.state !== 'running') break;
      const settings = await loadSettings();
      const deps = await buildDeps(settings);
      const contacts = await getContactsByIds(campaign.contactIds);
      const outcome = await processNextRecipient(campaign, contacts, deps);
      if (outcome.kind === 'completed') {
        const c2 = await getCampaign(campaignId);
        if (c2 && c2.state === 'running') await transition(c2, 'completed');
        break;
      }
      if (outcome.kind === 'session_lost') {
        const c2 = await getCampaign(campaignId);
        if (c2 && c2.state === 'running') await transition(c2, 'paused');
        break;
      }
      await interruptibleSleep(Math.round(pickDelay(campaign, Math.random)), campaignId);
    }
  } finally {
    if (runtime.runningCampaignId === campaignId) runtime.runningCampaignId = null;
  }
}

async function handleIntent(id: string, intent: QueueIntent): Promise<unknown> {
  const campaign = await getCampaign(id);
  if (!campaign) throw new Error('Campaign not found');
  if (!canApplyIntent(campaign.state, intent)) {
    throw new Error(`Cannot "${intent}" a campaign in state "${campaign.state}".`);
  }
  const settings = await loadSettings();
  switch (intent) {
    case 'markReady':
    case 'start': {
      const errors = validateStart({
        consentConfirmed: campaign.settings.consentConfirmed,
        requireFinalConfirmation: campaign.settings.requireFinalConfirmation,
        finalConfirmationGiven: true,
        recipientCount: campaign.contactIds.length,
        maxRecipients: Math.min(settings.queueDefaults.maxRecipients, campaign.settings.maxRecipients),
        adapterAvailable: await adapter.isAvailable(),
      });
      if (errors.length) throw new Error(errors.join(' '));
      await transition(campaign, 'ready');
      if (intent === 'start') {
        const c = await getCampaign(id);
        if (c) {
          await transition(c, 'running');
          void runQueueLoop(c.id);
        }
      }
      return { ok: true };
    }
    case 'pause':
      runtime.pauseRequested = true;
      if (!runtime.runningCampaignId) await transition(campaign, 'paused');
      return { ok: true };
    case 'resume': {
      await transition(campaign, 'running');
      void runQueueLoop(campaign.id);
      return { ok: true };
    }
    case 'stop':
      runtime.cancelRequested = true;
      if (!runtime.runningCampaignId) await transition(campaign, 'stopped');
      return { ok: true };
    case 'retryFailed': {
      const results = await getResultsForCampaign(id);
      const failed = results.filter((r) => r.status === 'failed');
      for (const f of failed) {
        await deleteResultRow(id, f.contactId);
      }
      const c = await getCampaign(id);
      if (!c) throw new Error('Campaign not found');
      if (c.state !== 'running') await transition(c, 'running');
      void runQueueLoop(c.id);
      return { ok: true, retried: failed.length };
    }
    case 'backToDraft':
      await transition(campaign, 'draft');
      return { ok: true };
  }
}

async function deleteResultRow(campaignId: string, contactId: string): Promise<void> {
  const { getDb } = await import('./db');
  const db = await getDb();
  await db.delete('results', [campaignId, contactId]);
}

async function handle(req: BridgeRequest): Promise<unknown> {
  switch (req.type) {
    case 'campaign/list':
      return listCampaigns();
    case 'campaign/get':
      return getCampaign(req.id);
    case 'campaign/saveDraft': {
      await putContacts(req.contacts);
      await putCampaign(req.campaign);
      return req.campaign;
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
      await deleteCampaign(req.id);
      return { ok: true };
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
      await putTemplate(req.template);
      return req.template;
    case 'template/delete':
      await deleteTemplate(req.id);
      return { ok: true };
    case 'suppression/list':
      return loadSuppression();
    case 'suppression/add': {
      const all = await loadSuppression();
      all.push(req.entry);
      await saveSuppression(all);
      return all;
    }
    case 'suppression/addMany': {
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
    }
    case 'suppression/remove': {
      const all = (await loadSuppression()).filter((e) => e.id !== req.id);
      await saveSuppression(all);
      return all;
    }
    case 'settings/get':
      return loadSettings();
    case 'settings/save':
      await saveSettings(req.settings);
      return req.settings;
    case 'session/snapshot':
      return { whatsappTabConnected: false, loggedIn: null, lastCheckedAt: Date.now() };
    case 'data/deleteAll':
      runtime.cancelRequested = true;
      await deleteAllLocalData();
      return { ok: true };
    case 'data/export':
      return exportAllLocalData();
    default: {
      const _exhaustive: never = req;
      return _exhaustive;
    }
  }
}

export const localEngine = {
  handle,
  subscribe(l: Listener): () => void {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

import type { CampaignState } from '../types/domain';

/**
 * Pure campaign state machine. The service worker is the only component that
 * applies transitions; UI asks for intents and renders resulting states.
 */

export const CAMPAIGN_STATES: CampaignState[] = [
  'draft',
  'ready',
  'running',
  'paused',
  'completed',
  'stopped',
  'failed',
];

const TRANSITIONS: Record<CampaignState, CampaignState[]> = {
  draft: ['ready'], // delete is a separate operation, not a transition
  ready: ['running', 'draft'],
  running: ['paused', 'completed', 'stopped', 'failed'],
  paused: ['running', 'stopped', 'draft'],
  completed: [],
  stopped: ['draft', 'ready'], // re-open for review/editing after a stop
  failed: ['ready', 'draft'],
};

export function canTransition(from: CampaignState, to: CampaignState): boolean {
  return TRANSITIONS[from]?.includes(to) ?? false;
}

export function nextStates(from: CampaignState): CampaignState[] {
  return [...(TRANSITIONS[from] ?? [])];
}

export class InvalidTransitionError extends Error {
  constructor(public readonly from: CampaignState, public readonly to: CampaignState) {
    super(`Invalid campaign transition: ${from} -> ${to}`);
    this.name = 'InvalidTransitionError';
  }
}

export function assertTransition(from: CampaignState, to: CampaignState): void {
  if (!canTransition(from, to)) throw new InvalidTransitionError(from, to);
}

/* Operator intents mapped onto states */
export type QueueIntent = 'markReady' | 'start' | 'pause' | 'resume' | 'stop' | 'retryFailed' | 'backToDraft';

export function intentTarget(intent: QueueIntent): CampaignState {
  switch (intent) {
    case 'markReady':
      return 'ready';
    case 'start':
      return 'running';
    case 'pause':
      return 'paused';
    case 'resume':
      return 'running';
    case 'stop':
      return 'stopped';
    case 'retryFailed':
      return 'running';
    case 'backToDraft':
      return 'draft';
  }
}

export function canApplyIntent(state: CampaignState, intent: QueueIntent): boolean {
  if (intent === 'retryFailed') {
    // Retry is allowed from terminal-ish states where failures may exist.
    return state === 'failed' || state === 'stopped' || state === 'completed' || state === 'paused';
  }
  return canTransition(state, intentTarget(intent));
}

/** Guards applied before a campaign may leave draft/ready toward running. */
export interface StartGuards {
  consentConfirmed: boolean;
  requireFinalConfirmation: boolean;
  finalConfirmationGiven: boolean;
  recipientCount: number;
  maxRecipients: number;
  adapterAvailable: boolean;
}

export function validateStart(g: StartGuards): string[] {
  const errors: string[] = [];
  if (!g.consentConfirmed) errors.push('Consent confirmation is required before starting a campaign.');
  if (g.requireFinalConfirmation && !g.finalConfirmationGiven)
    errors.push('Final review confirmation is required before starting.');
  if (g.recipientCount === 0) errors.push('Campaign has no recipients.');
  if (g.recipientCount > g.maxRecipients)
    errors.push(`Recipient count (${g.recipientCount}) exceeds the configured maximum (${g.maxRecipients}).`);
  if (!g.adapterAvailable) errors.push('No messaging transport is available in this build (demo mode only).');
  return errors;
}

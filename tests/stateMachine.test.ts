import { describe, it, expect } from 'vitest';
import {
  canTransition,
  canApplyIntent,
  intentTarget,
  assertTransition,
  InvalidTransitionError,
  validateStart,
} from '../src/background/stateMachine';

describe('campaign state machine', () => {
  it('allows the happy path draft -> ready -> running -> completed', () => {
    expect(canTransition('draft', 'ready')).toBe(true);
    expect(canTransition('ready', 'running')).toBe(true);
    expect(canTransition('running', 'completed')).toBe(true);
  });

  it('allows pause/resume/stop from running', () => {
    for (const to of ['paused', 'stopped', 'failed'] as const) {
      expect(canTransition('running', to)).toBe(true);
    }
    expect(canTransition('paused', 'running')).toBe(true);
  });

  it('forbids skipping states', () => {
    expect(canTransition('draft', 'running')).toBe(false);
    expect(canTransition('completed', 'running')).toBe(false);
    expect(canTransition('completed', 'draft')).toBe(false);
  });

  it('assertTransition throws InvalidTransitionError', () => {
    expect(() => assertTransition('draft', 'completed')).toThrow(InvalidTransitionError);
    expect(() => assertTransition('draft', 'ready')).not.toThrow();
  });

  it('intents map to target states and legality', () => {
    expect(intentTarget('start')).toBe('running');
    expect(canApplyIntent('ready', 'start')).toBe(true);
    expect(canApplyIntent('draft', 'start')).toBe(false);
    expect(canApplyIntent('paused', 'resume')).toBe(true);
    // retry is allowed from states where failures may exist
    expect(canApplyIntent('failed', 'retryFailed')).toBe(true);
    expect(canApplyIntent('draft', 'retryFailed')).toBe(false);
  });
});

describe('validateStart guards', () => {
  const base = {
    consentConfirmed: true,
    requireFinalConfirmation: true,
    finalConfirmationGiven: true,
    recipientCount: 10,
    maxRecipients: 100,
    adapterAvailable: true,
  };

  it('passes with all guards satisfied', () => {
    expect(validateStart(base)).toEqual([]);
  });

  it('blocks without consent', () => {
    expect(validateStart({ ...base, consentConfirmed: false })).toContain(
      'Consent confirmation is required before starting a campaign.',
    );
  });

  it('blocks without final review when required', () => {
    expect(validateStart({ ...base, finalConfirmationGiven: false }).length).toBe(1);
  });

  it('blocks empty campaigns and oversized campaigns', () => {
    expect(validateStart({ ...base, recipientCount: 0 }).length).toBeGreaterThan(0);
    expect(validateStart({ ...base, recipientCount: 101 }).length).toBeGreaterThan(0);
  });

  it('accumulates multiple errors', () => {
    const errs = validateStart({ ...base, consentConfirmed: false, recipientCount: 0 });
    expect(errs.length).toBe(2);
  });
});

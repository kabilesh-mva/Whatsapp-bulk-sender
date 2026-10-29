import { describe, it, expect } from 'vitest';
import { buildSuppressionIndex, isSuppressed, matchesOptOutPhrase } from '../src/lib/suppression';
import type { Contact, SuppressionEntry } from '../src/types/domain';

const entry = (phone: string): SuppressionEntry => ({
  id: crypto.randomUUID(),
  phone,
  normalizedPhone: null,
  reason: 'opt-out',
  createdAt: 0,
});

const contact = (phone: string, normalizedPhone: string | null): Contact => ({
  id: crypto.randomUUID(),
  phone,
  normalizedPhone,
  fields: {},
  consentStatus: 'opted_in',
  source: 'csv',
  createdAt: 0,
});

describe('suppression matching', () => {
  it('matches different formats of the same E.164 number', () => {
    const idx = buildSuppressionIndex([entry('+44 1234 567890')], 'US');
    expect(isSuppressed(contact('00441234567890', '+441234567890'), idx, 'US')).toBe(true);
  });

  it('does not match unrelated numbers', () => {
    const idx = buildSuppressionIndex([entry('+441234567890')], 'US');
    expect(isSuppressed(contact('+14155550101', '+14155550101'), idx, 'US')).toBe(false);
  });

  it('digits fallback catches differing country assumptions', () => {
    const idx = buildSuppressionIndex([entry('1234 567 890')], 'US');
    expect(isSuppressed(contact('(123) 456-7890', null), idx, 'US')).toBe(true);
  });
});

describe('matchesOptOutPhrase', () => {
  const phrases = ['stop', 'unsubscribe', 'do not contact me'];

  it('matches whole words case-insensitively', () => {
    expect(matchesOptOutPhrase('STOP sending messages', phrases)).toBe('stop');
    expect(matchesOptOutPhrase('Please Unsubscribe me thanks', phrases)).toBe('unsubscribe');
  });

  it('matches multi-word phrases', () => {
    expect(matchesOptOutPhrase('hey, DO NOT CONTACT ME anymore', phrases)).toBe('do not contact me');
  });

  it('does not match inside other words', () => {
    expect(matchesOptOutPhrase('I work at stopwatch inc', phrases)).toBeNull();
  });

  it('ignores blank input', () => {
    expect(matchesOptOutPhrase('   ', phrases)).toBeNull();
  });
});

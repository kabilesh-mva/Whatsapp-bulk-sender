import type { CountryCode } from 'libphonenumber-js';
import type { Contact, SuppressionEntry } from '../types/domain';
import { phoneMatchKey } from './phone';

/**
 * Suppression list matching + opt-out phrase matcher.
 * Matching is done on canonical keys (E.164 preferred, digits fallback) so that
 * "+44 1234 567890" and "00441234567890" are treated as the same contact.
 */

export function buildSuppressionIndex(
  entries: SuppressionEntry[],
  defaultCountry: CountryCode,
): Set<string> {
  const idx = new Set<string>();
  for (const e of entries) {
    const key = phoneMatchKey(e.phone, defaultCountry);
    if (key) idx.add(key);
    if (e.normalizedPhone) idx.add(e.normalizedPhone);
  }
  return idx;
}

export function isSuppressed(contact: Contact, index: Set<string>, defaultCountry: CountryCode): boolean {
  const key = contact.normalizedPhone ?? phoneMatchKey(contact.phone, defaultCountry);
  if (!key) return false;
  if (index.has(key)) return true;
  // Digits-level fallback comparison (covers differing country-code assumptions).
  const digits = 'digits:' + contact.phone.replace(/\D/g, '').replace(/^0+/, '');
  return index.has(digits);
}

export function makeSuppressionEntry(phone: string, reason: string, defaultCountry: CountryCode): SuppressionEntry {
  const key = phoneMatchKey(phone, defaultCountry);
  return {
    id: crypto.randomUUID(),
    phone: phone.trim(),
    normalizedPhone: key && !key.startsWith('digits:') ? key : null,
    reason: reason.trim() || 'manual',
    createdAt: Date.now(),
  };
}

/**
 * Optional inbound opt-out phrase matcher.
 * Only ever given a single message text that the operator (or content script bridge)
 * explicitly passes in — it never scans or stores unrelated conversations.
 */
export function matchesOptOutPhrase(text: string, phrases: string[]): string | null {
  const norm = text.trim().toLowerCase();
  if (!norm) return null;
  for (const p of phrases) {
    const phrase = p.trim().toLowerCase();
    if (!phrase) continue;
    // Whole-phrase match anywhere in the message, word-bounded where possible.
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(^|\\W)(${escaped})(\\W|$)`, 'i');
    if (re.test(norm)) return p;
  }
  return null;
}

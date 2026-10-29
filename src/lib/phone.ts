import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js/max';

/**
 * Phone normalization to E.164 using libphonenumber-js (fully local, no network).
 * Accepts formats like "0044 1234 567890", "(415) 555-0101", "+41 44 668 18 00".
 */
export interface NormalizedPhone {
  ok: boolean;
  e164: string | null;
  /** digits-only form used for suppression matching fallback */
  digits: string;
  reason?: 'empty' | 'invalid' | 'not_possible';
}

export function normalizePhone(raw: string, defaultCountry: CountryCode = 'US'): NormalizedPhone {
  const trimmed = (raw ?? '').trim();
  if (!trimmed) return { ok: false, e164: null, digits: '', reason: 'empty' };

  // Strip common separators but keep a leading + if present.
  let input = trimmed.replace(/[\s\u00A0().\-\/]/g, '');
  if (input.startsWith('00')) input = '+' + input.slice(2);

  const parsed = parsePhoneNumberFromString(input, defaultCountry);
  const digits = trimmed.replace(/\D/g, '');

  if (!parsed) return { ok: false, e164: null, digits, reason: 'invalid' };
  if (!parsed.isValid()) {
    if (parsed.isPossible()) {
      // Possible-but-not-valid numbers are still normalized so operators can review them.
      return { ok: true, e164: parsed.number, digits };
    }
    return { ok: false, e164: null, digits, reason: 'invalid' };
  }
  return { ok: true, e164: parsed.number, digits };
}

/** Canonical key for dedupe/suppression matching. Prefers E.164, falls back to last-10 digits. */
export function phoneMatchKey(raw: string, defaultCountry: CountryCode = 'US'): string | null {
  const n = normalizePhone(raw, defaultCountry);
  if (n.e164) return n.e164;
  const d = n.digits.replace(/^0+/, '');
  if (d.length < 7) return null;
  return 'digits:' + d;
}

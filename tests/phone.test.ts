import { describe, it, expect } from 'vitest';
import { normalizePhone, phoneMatchKey } from '../src/lib/phone';

describe('normalizePhone', () => {
  it('normalizes a US number with default country', () => {
    const r = normalizePhone('(415) 555-0101', 'US');
    expect(r.ok).toBe(true);
    expect(r.e164).toBe('+14155550101');
  });

  it('accepts international + format regardless of default country', () => {
    const r = normalizePhone('+44 1234 567890', 'US');
    expect(r.ok).toBe(true);
    expect(r.e164).toBe('+441234567890');
  });

  it('converts 00 IDD prefix to +', () => {
    const r = normalizePhone('0044 1234 567890', 'US');
    expect(r.ok).toBe(true);
    expect(r.e164).toBe('+441234567890');
  });

  it('uses the default country for national-format numbers', () => {
    const r = normalizePhone('07700 900982', 'GB');
    expect(r.ok).toBe(true);
    expect(r.e164).toBe('+447700900982');
  });

  it('rejects empty input', () => {
    const r = normalizePhone('   ', 'US');
    expect(r.ok).toBe(false);
    expect(r.reason).toBe('empty');
  });

  it('rejects clearly invalid numbers', () => {
    const r = normalizePhone('not-a-phone', 'US');
    expect(r.ok).toBe(false);
    expect(r.e164).toBeNull();
  });
});

describe('phoneMatchKey', () => {
  it('prefers E.164 when normalizable', () => {
    expect(phoneMatchKey('+1 (415) 555-0101', 'US')).toBe('+14155550101');
  });

  it('treats different formats of the same number as equal keys', () => {
    const a = phoneMatchKey('+44 1234 567890', 'US');
    const b = phoneMatchKey('00441234567890', 'US');
    expect(a).toBe(b);
  });

  it('falls back to digits form for unparseable but digit-heavy strings', () => {
    const key = phoneMatchKey('12345678901234567890', 'US');
    expect(key).not.toBeNull();
    expect(key!.startsWith('digits:')).toBe(true);
  });

  it('returns null for too-short garbage', () => {
    expect(phoneMatchKey('123', 'US')).toBeNull();
  });
});

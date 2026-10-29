import { describe, it, expect } from 'vitest';
import { parseCsv, guessMapping, buildImportPreview, toCsv } from '../src/lib/importParser';

describe('parseCsv', () => {
  it('parses headers and rows', () => {
    const { headers, rows } = parseCsv('phone,name,company\n+14155550101,Ada,Acme\n+441234567890,Bob,Globex\n');
    expect(headers).toEqual(['phone', 'name', 'company']);
    expect(rows.length).toBe(2);
    expect(rows[0].name).toBe('Ada');
  });

  it('skips empty lines', () => {
    const { rows } = parseCsv('phone\n+14155550101\n\n\n+441234567890\n');
    expect(rows.length).toBe(2);
  });
});

describe('guessMapping', () => {
  it('finds common column names case-insensitively', () => {
    const m = guessMapping(['Mobile', 'Full Name', 'Organization', 'notes']);
    expect(m.phoneColumn).toBe('Mobile');
    expect(m.nameColumn).toBe('Full Name');
    expect(m.companyColumn).toBe('Organization');
  });

  it('falls back to the first column for phone', () => {
    const m = guessMapping(['weird_col', 'x']);
    expect(m.phoneColumn).toBe('weird_col');
  });
});

describe('buildImportPreview', () => {
  const data = {
    headers: ['phone', 'name'],
    rows: [
      { phone: '+14155550101', name: 'Ada' },
      { phone: '+14155550101', name: 'Ada duplicate' }, // duplicate
      { phone: 'not-a-phone', name: 'Broken' }, // invalid phone
      { phone: '', name: '' }, // malformed/empty
      { phone: '+44 1234 567890', name: 'Bob' },
    ],
  };
  const mapping = { phoneColumn: 'phone', nameColumn: 'name' };

  it('deduplicates by normalized number', () => {
    const p = buildImportPreview(data, mapping, { defaultCountry: 'US' });
    expect(p.duplicateCount).toBeGreaterThanOrEqual(1);
    expect(p.validContacts.filter((c) => c.normalizedPhone === '+14155550101').length).toBe(1);
  });

  it('flags invalid phones and excludes empty rows', () => {
    const p = buildImportPreview(data, mapping, { defaultCountry: 'US' });
    expect(p.invalidPhoneCount).toBeGreaterThanOrEqual(1);
    expect(p.malformedCount).toBeGreaterThanOrEqual(1);
    expect(p.issues.some((i) => i.kind === 'malformed')).toBe(true);
  });

  it('keeps custom fields on contacts', () => {
    const p = buildImportPreview(data, mapping, { defaultCountry: 'US' });
    const ada = p.validContacts.find((c) => c.fields['name'] === 'Ada');
    expect(ada?.fields['name']).toBe('Ada');
  });
});

describe('toCsv', () => {
  it('escapes quotes and commas', () => {
    const csv = toCsv(['a', 'b'], [['x,y', 'he said "hi"']]);
    expect(csv).toContain('"x,y"');
    expect(csv).toContain('"he said ""hi"""');
  });
});

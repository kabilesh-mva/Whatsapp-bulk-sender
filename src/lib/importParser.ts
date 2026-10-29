import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import type { CountryCode } from 'libphonenumber-js';
import { normalizePhone, phoneMatchKey } from './phone';
import type { ColumnMapping, Contact, ImportIssue, ImportPreview, ParsedRow } from '../types/domain';

/**
 * Local CSV/XLSX parsing → column mapping → validation/normalization preview.
 * No network access; files are parsed entirely in-browser.
 */

export interface TabularData {
  headers: string[];
  rows: Record<string, string>[];
}

export function parseCsv(text: string): TabularData {
  const result = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: (h) => h.trim(),
  });
  const headers = (result.meta.fields ?? []).filter((h) => h.length > 0);
  const rows = result.data.filter((r) => r && typeof r === 'object');
  return { headers, rows };
}

export async function parseSpreadsheetFile(file: File): Promise<TabularData> {
  const buf = await file.arrayBuffer();
  const name = file.name.toLowerCase();
  if (name.endsWith('.csv')) {
    return parseCsv(new TextDecoder().decode(buf));
  }
  const wb = XLSX.read(buf, { type: 'array' });
  const sheetName = wb.SheetNames[0];
  if (!sheetName) return { headers: [], rows: [] };
  const sheet = wb.Sheets[sheetName];
  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: '' });
  const headerSet = new Set<string>();
  for (const r of records) for (const k of Object.keys(r)) headerSet.add(k.trim());
  const headers = [...headerSet];
  const rows = records.map((r) => {
    const out: Record<string, string> = {};
    for (const h of headers) out[h] = String(r[h] ?? '').trim();
    return out;
  });
  return { headers, rows };
}

/** Guess a sensible default mapping from common header names. */
export function guessMapping(headers: string[]): ColumnMapping {
  const lower = (s: string) => s.toLowerCase().replace(/[^a-z]/g, '');
  const find = (...cands: string[]) =>
    headers.find((h) => cands.includes(lower(h))) ?? undefined;
  return {
    phoneColumn: find('phone', 'phonenumber', 'mobile', 'msisdn', 'tel', 'number') ?? headers[0] ?? '',
    nameColumn: find('name', 'fullname', 'contactname', 'firstname'),
    companyColumn: find('company', 'organization', 'org', 'account'),
  };
}

export function buildImportPreview(
  data: TabularData,
  mapping: ColumnMapping,
  opts: { defaultCountry: CountryCode; consentStatus?: Contact['consentStatus']; source?: Contact['source'] },
): ImportPreview {
  const issues: ImportIssue[] = [];
  const contacts: Contact[] = [];
  const seen = new Map<string, number>(); // matchKey -> first row index
  let duplicateCount = 0;
  let malformedCount = 0;
  let invalidPhoneCount = 0;

  const parsedRows: ParsedRow[] = data.rows.map((raw, i) => ({ rowIndex: i, raw }));

  parsedRows.forEach(({ rowIndex, raw }) => {
    const values = Object.entries(raw).filter(([k]) => k.trim() !== '');
    if (values.length === 0 || values.every(([, v]) => String(v).trim() === '')) {
      malformedCount++;
      issues.push({ rowIndex, kind: 'malformed', message: 'Row is empty or unreadable and was excluded.' });
      return;
    }
    const phoneRaw = String(raw[mapping.phoneColumn] ?? '').trim();
    if (!phoneRaw) {
      malformedCount++;
      issues.push({
        rowIndex,
        kind: 'missing_phone',
        message: `No value in mapped phone column "${mapping.phoneColumn}".`,
      });
      return;
    }
    const norm = normalizePhone(phoneRaw, opts.defaultCountry);
    if (!norm.e164) {
      invalidPhoneCount++;
      issues.push({
        rowIndex,
        kind: 'invalid_phone',
        message: `"${phoneRaw}" could not be normalized to an international number.`,
      });
      return;
    }
    const key = phoneMatchKey(phoneRaw, opts.defaultCountry) ?? norm.e164;
    const firstSeen = seen.get(key);
    if (firstSeen !== undefined) {
      duplicateCount++;
      issues.push({
        rowIndex,
        kind: 'duplicate',
        message: `Duplicate of row ${firstSeen + 1} (${norm.e164}). Only the first occurrence is imported.`,
      });
      return;
    }
    seen.set(key, rowIndex);

    const fields: Record<string, string> = {};
    for (const [col, val] of Object.entries(raw)) {
      const cleanCol = col.trim();
      if (!cleanCol) continue;
      fields[cleanCol.toLowerCase()] = String(val ?? '').trim();
    }
    if (mapping.nameColumn) fields['name'] = String(raw[mapping.nameColumn] ?? '').trim();
    if (mapping.companyColumn) fields['company'] = String(raw[mapping.companyColumn] ?? '').trim();

    contacts.push({
      id: crypto.randomUUID(),
      phone: phoneRaw,
      normalizedPhone: norm.e164,
      fields,
      consentStatus: opts.consentStatus ?? 'unknown',
      source: opts.source ?? 'csv',
      createdAt: Date.now(),
    });
  });

  return {
    headers: data.headers,
    rows: parsedRows,
    issues,
    validContacts: contacts,
    duplicateCount,
    malformedCount,
    invalidPhoneCount,
  };
}

/** Serialize arbitrary rows to CSV text (used by report export too). */
export function toCsv(headers: string[], rows: (string | number | null | undefined)[][]): string {
  return Papa.unparse({ fields: headers, data: rows });
}

export function downloadTextFile(fileName: string, text: string, mime = 'text/csv;charset=utf-8'): void {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

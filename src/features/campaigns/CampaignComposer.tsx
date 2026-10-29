import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CountryCode } from 'libphonenumber-js';
import type { AttachmentMetadata, Campaign, Contact, ColumnMapping, ImportPreview, SuppressionEntry, Template } from '../../types/domain';
import { request } from '../../lib/bridge';
import { buildImportPreview, guessMapping, parseCsv, parseSpreadsheetFile, type TabularData } from '../../lib/importParser';
import { extractVariables, renderTemplate, contactVariableMap, validateTemplateVariables } from '../../lib/templateVars';
import { validateAttachment, formatBytes, MAX_ATTACHMENT_BYTES } from '../../lib/attachments';
import { useApp, t } from '../../panel/AppContext';

/**
 * Campaign Composer: import → mapping → validation preview → message editor →
 * consent + safety controls → final review → save draft / mark ready.
 */

type Step = 'recipients' | 'message' | 'consent' | 'review';

interface AppSettingsLike {
  queueDefaults: { requireFinalConfirmation: boolean; maxRecipients: number };
  defaultCountryCode: string;
}

interface DraftState {
  id: string;
  name: string;
  body: string;
  attachment: AttachmentMetadata | null;
  attachmentDataUrl: string | null;
  contacts: Contact[];
  consentConfirmed: boolean;
  minDelaySec: number;
  maxDelaySec: number;
  maxRecipients: number;
}

function emptyDraft(): DraftState {
  return {
    id: crypto.randomUUID(),
    name: '',
    body: 'Hi {{name}}, this is {{company}} reaching out.',
    attachment: null,
    attachmentDataUrl: null,
    contacts: [],
    consentConfirmed: false,
    minDelaySec: 30,
    maxDelaySec: 90,
    maxRecipients: 250,
  };
}

export function CampaignComposer({ onSaved }: { onSaved?: (campaignId: string) => void }) {
  const { settings } = useApp();
  const [draft, setDraft] = useState<DraftState>(emptyDraft);
  const [step, setStep] = useState<Step>('recipients');
  const [tabular, setTabular] = useState<TabularData | null>(null);
  const [mapping, setMapping] = useState<ColumnMapping>({ phoneColumn: '' });
  const [preview, setPreview] = useState<ImportPreview | null>(null);
  const [fileName, setFileName] = useState('');
  const [manualPhone, setManualPhone] = useState('');
  const [manualName, setManualName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState<string | null>(null);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [previewContactId, setPreviewContactId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void request<Template[]>({ type: 'template/list' }).then(setTemplates).catch(() => undefined);
  }, []);

  /* ---------- step 1: import ---------- */

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      setSaved(null);
      try {
        const data = await parseSpreadsheetFile(file);
        if (data.headers.length === 0) throw new Error('No columns found in this file.');
        setTabular(data);
        setFileName(file.name);
        setMapping(guessMapping(data.headers));
        setPreview(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Could not read the file.');
      }
    },
    [],
  );

  const pasteCsv = useCallback((text: string) => {
    if (!text.trim()) return;
    const data = parseCsv(text);
    setTabular(data);
    setFileName('pasted.csv');
    setMapping(guessMapping(data.headers));
    setPreview(null);
  }, []);

  const runValidation = useCallback(() => {
    if (!tabular) return;
    const p = buildImportPreview(tabular, mapping, {
      defaultCountry: settings.defaultCountryCode as CountryCode,
      source: fileName.endsWith('.xlsx') || fileName.endsWith('.xls') ? 'xlsx' : 'csv',
    });
    setPreview(p);
    setDraft((d) => ({ ...d, contacts: p.validContacts }));
    setPreviewContactId(p.validContacts[0]?.id ?? null);
  }, [tabular, mapping, settings.defaultCountryCode, fileName]);

  const addManualContact = useCallback(() => {
    const p = buildImportPreview(
      { headers: ['phone', 'name'], rows: [{ phone: manualPhone, name: manualName }] },
      { phoneColumn: 'phone', nameColumn: 'name' },
      { defaultCountry: settings.defaultCountryCode as CountryCode, source: 'manual' },
    );
    if (p.validContacts.length === 0) {
      setError(p.issues[0]?.message ?? 'Invalid phone number.');
      return;
    }
    setError(null);
    setDraft((d) => {
      const exists = d.contacts.some(
        (c) => c.normalizedPhone === p.validContacts[0].normalizedPhone,
      );
      if (exists) return d;
      return { ...d, contacts: [...d.contacts, ...p.validContacts] };
    });
    setManualPhone('');
    setManualName('');
  }, [manualPhone, manualName, settings.defaultCountryCode]);

  /* ---------- derived values ---------- */

  const availableFields = useMemo(() => {
    const s = new Set<string>(['phone']);
    for (const c of draft.contacts) for (const k of Object.keys(c.fields)) s.add(k);
    return [...s].sort();
  }, [draft.contacts]);

  const previewContact = draft.contacts.find((c) => c.id === previewContactId) ?? draft.contacts[0] ?? null;
  const renderedPreview = previewContact
    ? renderTemplate(draft.body, contactVariableMap(previewContact.fields, previewContact.normalizedPhone))
    : renderTemplate(draft.body, {});
  const missingVars = validateTemplateVariables(draft.body, availableFields).missing;

  /* ---------- recipient filters (rendered directly below the numbers/paste box) ---------- */

  const [phoneFilter, setPhoneFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [namedOnly, setNamedOnly] = useState(false);
  const [includeSuppressed, setIncludeSuppressed] = useState(true);
  const [suppressionEntries, setSuppressionEntries] = useState<SuppressionEntry[]>([]);

  useEffect(() => {
    void request<SuppressionEntry[]>({ type: 'suppression/list' }).then(setSuppressionEntries).catch(() => undefined);
  }, []);

  const suppressedSet = useMemo(
    () => new Set(suppressionEntries.map((e) => e.normalizedPhone ?? e.phone).filter(Boolean)),
    [suppressionEntries],
  );

  const countries = useMemo(() => {
    const set = new Set<string>();
    for (const c of draft.contacts) {
      const m = /^\+(\d{1,3})/.exec(c.normalizedPhone);
      if (m) set.add(m[1]);
    }
    return [...set].sort();
  }, [draft.contacts]);

  const filteredContacts = useMemo(() => {
    const q = phoneFilter.trim().toLowerCase();
    return draft.contacts.filter((c) => {
      if (!includeSuppressed && suppressedSet.has(c.normalizedPhone)) return false;
      if (namedOnly && !(c.fields['name'] ?? '').trim()) return false;
      if (q && !`${c.normalizedPhone} ${c.phone} ${(c.fields['name'] ?? '').toLowerCase()}`.includes(q)) return false;
      if (countryFilter !== 'all' && !c.normalizedPhone.startsWith(`+${countryFilter}`)) return false;
      return true;
    });
  }, [draft.contacts, phoneFilter, countryFilter, namedOnly, includeSuppressed, suppressedSet]);

  // The campaign is built from the *filtered* selection — filters decide who gets sent to.
  const effectiveContacts = filteredContacts;

  const suppressedInSelection = useMemo(
    () => draft.contacts.filter((c) => suppressedSet.has(c.normalizedPhone)).length,
    [draft.contacts, suppressedSet],
  );

  /* ---------- steps 2-4 ---------- */

  const onAttach = useCallback(async (file: File) => {
    const v = validateAttachment(file);
    if (!v.ok) {
      setError(v.error ?? 'Invalid attachment.');
      return;
    }
    setError(null);
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(String(fr.result));
      fr.onerror = () => reject(new Error('Could not read the attachment.'));
      fr.readAsDataURL(file);
    });
    setDraft((d) => ({
      ...d,
      attachment: {
        fileName: file.name,
        mimeType: file.type || 'application/octet-stream',
        sizeBytes: file.size,
        dataKey: `att:${d.id}`,
      },
      attachmentDataUrl: dataUrl,
    }));
  }, []);

  const insertVar = useCallback((name: string) => {
    setDraft((d) => ({ ...d, body: `${d.body}{{${name}}}` }));
  }, []);

  const buildCampaign = useCallback(
    (state: Campaign['state']): Campaign => ({
      id: draft.id,
      name: draft.name.trim() || 'Untitled campaign',
      messageTemplate: { body: draft.body, attachment: draft.attachment ?? undefined },
      contactIds: effectiveContacts.map((c) => c.id),
      state,
      settings: {
        minDelayMs: Math.max(0, draft.minDelaySec) * 1000,
        maxDelayMs: Math.max(draft.minDelaySec, draft.maxDelaySec) * 1000,
        maxRecipients: draft.maxRecipients,
        requireFinalConfirmation: settings.queueDefaults.requireFinalConfirmation,
        consentConfirmed: draft.consentConfirmed,
        locale: settings.locale,
      },
      createdAt: Date.now(),
      startedAt: null,
      completedAt: null,
    }),
    [draft, settings, effectiveContacts],
  );

  const saveDraft = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      const campaign = buildCampaign('draft');
      await request({ type: 'campaign/saveDraft', campaign, contacts: effectiveContacts });
      if (draft.attachment && draft.attachmentDataUrl) {
        await putAttachmentLocal(draft.attachment.dataKey!, draft.attachmentDataUrl);
      }
      setSaved(`Draft saved (${campaign.contactIds.length} recipients).`);
      onSaved?.(campaign.id);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save the draft.');
    } finally {
      setBusy(false);
    }
  }, [buildCampaign, draft, onSaved]);

  const markReady = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      const campaign = buildCampaign('draft');
      await request({ type: 'campaign/saveDraft', campaign, contacts: effectiveContacts });
      if (draft.attachment && draft.attachmentDataUrl) {
        await putAttachmentLocal(draft.attachment.dataKey!, draft.attachmentDataUrl);
      }
      await request({ type: 'campaign/markReady', id: campaign.id });
      setSaved(`Campaign "${campaign.name}" is Ready.`);
      onSaved?.(campaign.id);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not mark the campaign ready.');
    } finally {
      setBusy(false);
    }
  }, [buildCampaign, draft, onSaved]);

  const canReview = draft.name.trim().length > 0 && draft.contacts.length > 0 && draft.body.trim().length > 0;

  /* ---------- render ---------- */

  return (
    <div>
      <nav className="rc-nav" aria-label="Composer steps">
        {(
          [
            ['recipients', '1 · Recipients'],
            ['message', '2 · Message'],
            ['consent', '3 · Consent & safety'],
            ['review', '4 · Review'],
          ] as [Step, string][]
        ).map(([s, label]) => (
          <button key={s} data-step={s} onClick={() => setStep(s)} aria-current={step === s ? 'page' : undefined}>
            {label}
          </button>
        ))}
      </nav>

      {error && (
        <div className="rc-alert rc-alert-danger" role="alert">
          {error}
        </div>
      )}
      {saved && (
        <div className="rc-alert rc-alert-info" role="status">
          {saved}
        </div>
      )}

      {step === 'recipients' && (
        <>
          <section className="rc-card" aria-labelledby="import-heading">
            <h2 id="import-heading">Import recipients (CSV / XLSX)</h2>
            <p className="rc-devices-note">
              Files are parsed locally in your browser. Nothing is uploaded. Example file: <code>examples/contacts.example.csv</code>
            </p>
            <div className="rc-row">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                aria-label="Choose a CSV or XLSX file"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void handleFile(f);
                }}
              />
            </div>
            <label className="rc-label" htmlFor="paste-csv">
              …or paste CSV text
            </label>
            <textarea
              id="paste-csv"
              className="rc-textarea"
              placeholder={'phone,name,company\n+14155550101,Alex Doe,Acme'}
              onBlur={(e) => pasteCsv(e.target.value)}
              rows={3}
            />
            {fileName && <p>Loaded: <strong>{fileName}</strong> ({tabular?.rows.length ?? 0} rows)</p>}
            <p className="rc-devices-note">Paste your rows, then click out of the box (or press Tab) to load them.</p>
          </section>

          {tabular && (
            <section className="rc-card" aria-labelledby="mapping-heading">
              <h2 id="mapping-heading">Map columns</h2>
              <div className="rc-grid-2">
                <div>
                  <label className="rc-label" htmlFor="map-phone">Phone column *</label>
                  <select
                    id="map-phone"
                    className="rc-select"
                    value={mapping.phoneColumn}
                    onChange={(e) => setMapping((m) => ({ ...m, phoneColumn: e.target.value }))}
                  >
                    {tabular.headers.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="rc-label" htmlFor="map-name">Name column</label>
                  <select
                    id="map-name"
                    className="rc-select"
                    value={mapping.nameColumn ?? ''}
                    onChange={(e) => setMapping((m) => ({ ...m, nameColumn: e.target.value || undefined }))}
                  >
                    <option value="">— none —</option>
                    {tabular.headers.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="rc-label" htmlFor="map-company">Company column</label>
                  <select
                    id="map-company"
                    className="rc-select"
                    value={mapping.companyColumn ?? ''}
                    onChange={(e) => setMapping((m) => ({ ...m, companyColumn: e.target.value || undefined }))}
                  >
                    <option value="">— none —</option>
                    {tabular.headers.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div className="rc-row" style={{ alignItems: 'flex-end' }}>
                  <button className="rc-btn rc-btn-primary" onClick={runValidation}>
                    Validate &amp; normalize
                  </button>
                </div>
              </div>
              <p className="rc-devices-note">
                All other columns are kept as custom fields and become template variables automatically.
              </p>
            </section>
          )}

          {preview && (
            <section className="rc-card" aria-labelledby="preview-heading">
              <h2 id="preview-heading">Import preview — review before saving</h2>
              <div className="rc-stats">
                <div className="rc-stat"><b>{preview.validContacts.length}</b><span>will import</span></div>
                <div className="rc-stat"><b>{preview.duplicateCount}</b><span>duplicates</span></div>
                <div className="rc-stat"><b>{preview.invalidPhoneCount}</b><span>invalid numbers</span></div>
                <div className="rc-stat"><b>{preview.malformedCount}</b><span>malformed rows</span></div>
              </div>
              {preview.issues.length > 0 && (
                <div style={{ maxHeight: 160, overflowY: 'auto', marginTop: 8 }}>
                  <table className="rc-table">
                    <thead>
                      <tr><th>Row</th><th>Issue</th></tr>
                    </thead>
                    <tbody>
                      {preview.issues.slice(0, 200).map((iss, i) => (
                        <tr key={i}>
                          <td>{iss.rowIndex + 1}</td>
                          <td>
                            <span className="rc-badge">{iss.kind.replace('_', ' ')}</span> {iss.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {preview.issues.length > 200 && <p>…and {preview.issues.length - 200} more.</p>}
                </div>
              )}
              <h3>Normalized sample</h3>
              <table className="rc-table">
                <thead>
                  <tr><th>#</th><th>Raw</th><th>Normalized (E.164)</th><th>Name</th></tr>
                </thead>
                <tbody>
                  {preview.validContacts.slice(0, 8).map((c, i) => (
                    <tr key={c.id}>
                      <td>{i + 1}</td>
                      <td>{c.phone}</td>
                      <td>{c.normalizedPhone}</td>
                      <td>{c.fields['name'] ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          <section className="rc-card" aria-labelledby="manual-heading">
            <h2 id="manual-heading">Add manually</h2>
            <div className="rc-grid-2">
              <div>
                <label className="rc-label" htmlFor="man-phone">Phone (country default: {settings.defaultCountryCode})</label>
                <input
                  id="man-phone"
                  className="rc-input"
                  value={manualPhone}
                  onChange={(e) => setManualPhone(e.target.value)}
                  placeholder="+1 415 555 0101"
                />
              </div>
              <div>
                <label className="rc-label" htmlFor="man-name">Name</label>
                <input id="man-name" className="rc-input" value={manualName} onChange={(e) => setManualName(e.target.value)} />
              </div>
            </div>
            <button className="rc-btn" onClick={addManualContact} style={{ marginTop: 8 }}>
              Add contact
            </button>
          </section>

          <section className="rc-card">
            <h2>Current recipient list</h2>
            <p>
              <strong>{draft.contacts.length}</strong> valid recipients selected. Suppressed contacts are skipped
              automatically at send time ({suppressedCount} known now).
            </p>
            {draft.contacts.length === 0 && (
              <div className="rc-empty">No recipients yet — import a file or add one manually.</div>
            )}
            <div className="rc-row" style={{ marginTop: 8 }}>
              <button className="rc-btn rc-btn-primary" disabled={!canReview && draft.contacts.length === 0} onClick={() => setStep('message')}>
                Continue to message →
              </button>
            </div>
          </section>
        </>
      )}

      {step === 'message' && (
        <>
          <section className="rc-card">
            <label className="rc-label" htmlFor="camp-name">Campaign name *</label>
            <input
              id="camp-name"
              className="rc-input"
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              placeholder="October member update"
            />
            {templates.length > 0 && (
              <>
                <label className="rc-label" htmlFor="use-template">Load local template</label>
                <select
                  id="use-template"
                  className="rc-select"
                  defaultValue=""
                  onChange={(e) => {
                    const tpl = templates.find((x) => x.id === e.target.value);
                    if (tpl) setDraft((d) => ({ ...d, body: tpl.body }));
                  }}
                >
                  <option value="">— choose —</option>
                  {templates.map((x) => (
                    <option key={x.id} value={x.id}>{x.name} ({x.category})</option>
                  ))}
                </select>
              </>
            )}
          </section>

          <section className="rc-card">
            <h2>Message</h2>
            <label className="rc-label" htmlFor="msg-body">Body (supports {'{{variable}}'} placeholders)</label>
            <textarea
              id="msg-body"
              className="rc-textarea"
              value={draft.body}
              onChange={(e) => setDraft((d) => ({ ...d, body: e.target.value }))}
            />
            <div className="rc-row" style={{ marginTop: 6 }} aria-label="Insert variable">
              {availableFields.slice(0, 12).map((f) => (
                <button key={f} type="button" className="rc-chip" onClick={() => insertVar(f)} title={`Insert {{${f}}}`}>
                  {'{{' + f + '}}'}
                </button>
              ))}
            </div>
            {missingVars.length > 0 && (
              <div className="rc-alert rc-alert-warn" role="alert">
                Unknown variables: {missingVars.join(', ')}. They will render as empty text.
              </div>
            )}
          </section>

          <section className="rc-card">
            <h2>Attachment (optional, single file)</h2>
            <input
              type="file"
              aria-label="Choose an attachment"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void onAttach(f);
              }}
            />
            {draft.attachment && (
              <p>
                📎 {draft.attachment.fileName} · {draft.attachment.mimeType} ·{' '}
                {formatBytes(draft.attachment.sizeBytes)}{' '}
                <button
                  type="button"
                  className="rc-btn rc-btn-ghost"
                  onClick={() => setDraft((d) => ({ ...d, attachment: null, attachmentDataUrl: null }))}
                >
                  Remove
                </button>
              </p>
            )}
            <p className="rc-devices-note">Limit {formatBytes(MAX_ATTACHMENT_BYTES)}. Images, PDF/Office docs, audio and common video formats.</p>
          </section>

          <section className="rc-card">
            <h2>Live preview</h2>
            {draft.contacts.length > 0 ? (
              <>
                <label className="rc-label" htmlFor="preview-contact">Preview with contact</label>
                <select
                  id="preview-contact"
                  className="rc-select"
                  value={previewContact?.id ?? ''}
                  onChange={(e) => setPreviewContactId(e.target.value)}
                >
                  {draft.contacts.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.fields['name'] || 'Unnamed'} · {c.normalizedPhone}
                    </option>
                  ))}
                </select>
                <div className="rc-preview-bubble" role="img" aria-label="Rendered message preview">
                  {renderedPreview.text || <em>(empty message)</em>}
                </div>
                {draft.attachment && <p>📎 With attachment: {draft.attachment.fileName}</p>}
              </>
            ) : (
              <div className="rc-empty">Import recipients first to see a personalized preview.</div>
            )}
            <div className="rc-row" style={{ marginTop: 10 }}>
              <button className="rc-btn" onClick={() => setStep('recipients')}>← Back</button>
              <button className="rc-btn rc-btn-primary" onClick={() => setStep('consent')} disabled={!draft.name.trim() || !draft.body.trim()}>
                Continue to consent →
              </button>
            </div>
          </section>
        </>
      )}

      {step === 'consent' && <ConsentControls draft={draft} setDraft={setDraft} />}

      {step === 'review' && (
        <ReviewScreen
          draft={draft}
          settings={settings}
          busy={busy}
          onBack={() => setStep('consent')}
          onSaveDraft={() => void saveDraft()}
          onMarkReady={() => void markReady()}
        />
      )}
    </div>
  );
}

/* ---------------- consent & safety step ---------------- */

function ConsentControls({
  draft,
  setDraft,
}: {
  draft: DraftState;
  setDraft: React.Dispatch<React.SetStateAction<DraftState>>;
}) {
  const { settings } = useApp();
  return (
    <>
      <section className="rc-card">
        <h2>Consent confirmation</h2>
        <div className="rc-alert rc-alert-danger" role="alert">
          {t('warning.automation')}
        </div>
        <label className="rc-row" style={{ gap: 8 }}>
          <input
            type="checkbox"
            checked={draft.consentConfirmed}
            onChange={(e) => setDraft((d) => ({ ...d, consentConfirmed: e.target.checked }))}
          />
          <span>{t('consent.confirm')}</span>
        </label>
        <p className="rc-devices-note">
          This attestation is stored with the campaign and re-checked by the queue before any send attempt.
          Without it, Start is blocked.
        </p>
      </section>

      <section className="rc-card">
        <h2>Queue pacing &amp; size limits</h2>
        <p className="rc-devices-note">
          Operator-controlled pacing keeps sends predictable and reviewable. These are <em>not</em> designed to evade
          platform enforcement — WhatsApp automation remains subject to WhatsApp&apos;s rules.
        </p>
        <div className="rc-grid-2">
          <div>
            <label className="rc-label" htmlFor="min-delay">Minimum delay between messages (seconds)</label>
            <input
              id="min-delay"
              type="number"
              min={0}
              className="rc-input"
              value={draft.minDelaySec}
              onChange={(e) => setDraft((d) => ({ ...d, minDelaySec: Number(e.target.value) || 0 }))}
            />
          </div>
          <div>
            <label className="rc-label" htmlFor="max-delay">Maximum delay (seconds)</label>
            <input
              id="max-delay"
              type="number"
              min={0}
              className="rc-input"
              value={draft.maxDelaySec}
              onChange={(e) => setDraft((d) => ({ ...d, maxDelaySec: Number(e.target.value) || 0 }))}
            />
          </div>
          <div>
            <label className="rc-label" htmlFor="max-recip">Maximum campaign size (recipients)</label>
            <input
              id="max-recip"
              type="number"
              min={1}
              className="rc-input"
              value={draft.maxRecipients}
              onChange={(e) => setDraft((d) => ({ ...d, maxRecipients: Number(e.target.value) || 1 }))}
            />
          </div>
          <div className="rc-devices-note" style={{ alignSelf: 'end' }}>
            Global cap from Settings: {settings.queueDefaults.maxRecipients} recipients. The lower cap applies.
          </div>
        </div>
        <div className="rc-row" style={{ marginTop: 10 }}>
          <button className="rc-btn rc-btn-primary" onClick={() => setStep('review')} disabled={!draft.consentConfirmed}>
            To review →
          </button>
        </div>
      </section>
    </>
  );
}

/* ---------------- final review ---------------- */

function ReviewScreen({
  draft,
  settings,
  busy,
  onBack,
  onSaveDraft,
  onMarkReady,
}: {
  draft: DraftState;
  settings: AppSettingsLike;
  busy: boolean;
  onBack: () => void;
  onSaveDraft: () => void;
  onMarkReady: () => void;
}) {
  const overCap = draft.contacts.length > Math.min(settings.queueDefaults.maxRecipients, draft.maxRecipients);
  const vars = extractVariables(draft.body);
  return (
    <section className="rc-card" aria-labelledby="review-heading">
      <h2 id="review-heading">Final review</h2>
      <table className="rc-table">
        <tbody>
          <tr><td>Campaign</td><td><strong>{draft.name || '(unnamed)'}</strong></td></tr>
          <tr><td>Recipients</td><td>{draft.contacts.length}</td></tr>
          <tr><td>Variables used</td><td>{vars.length ? vars.map((v) => `{{${v}}}`).join(', ') : 'none'}</td></tr>
          <tr><td>Attachment</td><td>{draft.attachment ? `${draft.attachment.fileName} (${formatBytes(draft.attachment.sizeBytes)})` : 'none'}</td></tr>
          <tr><td>Pacing</td><td>{draft.minDelaySec}s – {draft.maxDelaySec}s between messages</td></tr>
          <tr><td>Max campaign size</td><td>{draft.maxRecipients}</td></tr>
          <tr><td>Consent confirmed</td><td>{draft.consentConfirmed ? '✅ yes' : '❌ no — required'}</td></tr>
          <tr><td>Transport</td><td>Demo mock adapter (no real messages)</td></tr>
        </tbody>
      </table>
      {overCap && (
        <div className="rc-alert rc-alert-danger" role="alert">
          Recipient count exceeds the configured maximum. Reduce the list or raise the limit in Settings.
        </div>
      )}
      {!draft.consentConfirmed && (
        <div className="rc-alert rc-alert-warn" role="alert">
          You must confirm opt-in consent on the previous step before marking this campaign Ready.
        </div>
      )}
      <div className="rc-row" style={{ marginTop: 12 }}>
        <button className="rc-btn" onClick={onBack}>← Back</button>
        <button className="rc-btn" onClick={onSaveDraft} disabled={busy}>
          Save as draft
        </button>
        <button
          className="rc-btn rc-btn-primary"
          onClick={onMarkReady}
          disabled={busy || !draft.consentConfirmed || overCap || draft.contacts.length === 0 || !draft.name.trim()}
        >
          {settings.queueDefaults.requireFinalConfirmation ? 'Confirm & mark Ready' : 'Mark Ready'}
        </button>
      </div>
    </section>
  );
}

/* helper kept here so composer doesn't import db directly */
async function putAttachmentLocal(key: string, dataUrl: string): Promise<void> {
  const { putAttachment } = await import('../../lib/db');
  await putAttachment(key, dataUrl);
}

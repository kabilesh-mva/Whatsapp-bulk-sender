import { useCallback, useEffect, useState } from 'react';
import type { AppSettings } from '../../types/domain';
import { getCountries } from 'libphonenumber-js/max';
import { request } from '../../lib/bridge';
import { downloadTextFile } from '../../lib/importParser';
import { matchesOptOutPhrase } from '../../lib/suppression';
import { useApp, t } from '../../panel/AppContext';

/**
 * Settings: default country code, locale, theme (light/dark), queue defaults,
 * opt-out matcher configuration, data export and full local-data deletion.
 */

export function SettingsScreen() {
  const { settings, saveSettings } = useApp();
  const [draft, setDraft] = useState<AppSettings>(settings);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [testText, setTestText] = useState('');

  useEffect(() => setDraft(settings), [settings]);

  const countries = getCountries();

  const persist = useCallback(
    async (next: AppSettings) => {
      setBusy(true);
      setError(null);
      try {
        await saveSettings(next);
        setNotice('Settings saved locally.');
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setBusy(false);
      }
    },
    [saveSettings],
  );

  const exportData = async () => {
    try {
      const snapshot = await request<Record<string, unknown>>({ type: 'data/export' });
      downloadTextFile('relay-campaigns-export.json', JSON.stringify(snapshot, null, 2), 'application/json');
      setNotice('Export downloaded — this file was created on your device only.');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const deleteAll = async () => {
    if (
      !window.confirm(
        'Delete ALL local data?\n\nCampaigns, contacts, templates, reports, suppression list and settings will be erased from this browser profile. This cannot be undone.',
      )
    )
      return;
    if (!window.confirm('Really sure? Every campaign history will be permanently removed.')) return;
    setBusy(true);
    try {
      await request({ type: 'data/deleteAll' });
      // Reset the privacy acknowledgement so the notice shows again after wipe.
      try {
        localStorage.removeItem('relay:privacy-ack');
      } catch {
        /* ignore */
      }
      setNotice('All local data deleted.');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const optOutHit = draft.optOutMatcherEnabled && testText.trim() ? matchesOptOutPhrase(testText, draft.optOutPhrases) : null;

  return (
    <div>
      {error && <div className="rc-alert rc-alert-danger" role="alert">{error}</div>}
      {notice && <div className="rc-alert rc-alert-info" role="status">{notice}</div>}

      <section className="rc-card">
        <h2>General</h2>
        <div className="rc-grid-2">
          <div>
            <label className="rc-label" htmlFor="set-country">Default country code (for numbers without +)</label>
            <select
              id="set-country"
              className="rc-select"
              value={draft.defaultCountryCode}
              onChange={(e) => setDraft({ ...draft, defaultCountryCode: e.target.value })}
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="rc-label" htmlFor="set-locale">Interface locale</label>
            <select id="set-locale" className="rc-select" value={draft.locale} onChange={(e) => setDraft({ ...draft, locale: e.target.value })}>
              <option value="en">English</option>
            </select>
            <p className="rc-devices-note">More locales can be added in src/lib/i18n.ts.</p>
          </div>
          <div>
            <label className="rc-label" htmlFor="set-theme">Theme</label>
            <select id="set-theme" className="rc-select" value={draft.theme} onChange={(e) => setDraft({ ...draft, theme: e.target.value as 'light' | 'dark' })}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rc-card">
        <h2>Queue defaults</h2>
        <p className="rc-devices-note">
          Applied to new campaigns. Pacing keeps sending predictable and reviewable — it is not a way to evade
          platform rules, and WhatsApp automation may still conflict with them.
        </p>
        <div className="rc-grid-2">
          <div>
            <label className="rc-label" htmlFor="q-min">Minimum delay between messages (ms)</label>
            <input
              id="q-min"
              type="number"
              min={0}
              className="rc-input"
              value={draft.queueDefaults.minDelayMs}
              onChange={(e) => setDraft({ ...draft, queueDefaults: { ...draft.queueDefaults, minDelayMs: Number(e.target.value) || 0 } })}
            />
          </div>
          <div>
            <label className="rc-label" htmlFor="q-max">Maximum delay between messages (ms)</label>
            <input
              id="q-max"
              type="number"
              min={0}
              className="rc-input"
              value={draft.queueDefaults.maxDelayMs}
              onChange={(e) => setDraft({ ...draft, queueDefaults: { ...draft.queueDefaults, maxDelayMs: Number(e.target.value) || 0 } })}
            />
          </div>
          <div>
            <label className="rc-label" htmlFor="q-cap">Maximum recipients per campaign</label>
            <input
              id="q-cap"
              type="number"
              min={1}
              className="rc-input"
              value={draft.queueDefaults.maxRecipients}
              onChange={(e) => setDraft({ ...draft, queueDefaults: { ...draft.queueDefaults, maxRecipients: Number(e.target.value) || 1 } })}
            />
          </div>
          <label className="rc-row" style={{ gap: 8, alignItems: 'center', alignSelf: 'end' }}>
            <input
              type="checkbox"
              checked={draft.queueDefaults.requireFinalConfirmation}
              onChange={(e) => setDraft({ ...draft, queueDefaults: { ...draft.queueDefaults, requireFinalConfirmation: e.target.checked } })}
            />
            <span>Require final review confirmation before Start</span>
          </label>
        </div>
      </section>

      <section className="rc-card">
        <h2>Opt-out phrase matcher (optional)</h2>
        <label className="rc-row" style={{ gap: 8 }}>
          <input
            type="checkbox"
            checked={draft.optOutMatcherEnabled}
            onChange={(e) => setDraft({ ...draft, optOutMatcherEnabled: e.target.checked })}
          />
          <span>Enable manual opt-out check</span>
        </label>
        <p className="rc-devices-note">
          When enabled, you can paste a single inbound reply here and Relay tells you whether it matches an
          opt-out phrase, so you can suppress that contact. The extension never scans or stores unrelated
          messages automatically.
        </p>
        <label className="rc-label" htmlFor="optout-phrases">Phrases (one per line)</label>
        <textarea
          id="optout-phrases"
          className="rc-textarea"
          rows={3}
          value={draft.optOutPhrases.join('\n')}
          onChange={(e) => setDraft({ ...draft, optOutPhrases: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean) })}
        />
        {draft.optOutMatcherEnabled && (
          <>
            <label className="rc-label" htmlFor="optout-test">Test a reply</label>
            <div className="rc-row">
              <input id="optout-test" className="rc-input" style={{ flex: 2 }} value={testText} onChange={(e) => setTestText(e.target.value)} placeholder="Please stop messaging me" />
            </div>
            {testText.trim() && (
              <p role="status" style={{ color: optOutHit ? 'var(--rc-warn)' : 'var(--rc-success)' }}>
                {optOutHit ? `Matches “${optOutHit}” — add the sender to the suppression list.` : 'No opt-out phrase matched.'}
              </p>
            )}
          </>
        )}
      </section>

      <section className="rc-card">
        <h2>Data &amp; privacy</h2>
        <p>{t('privacy.notice')}</p>
        <div className="rc-row">
          <button className="rc-btn" onClick={() => void exportData()} disabled={busy}>Export all data (JSON)</button>
          <button className="rc-btn rc-btn-danger" onClick={() => void deleteAll()} disabled={busy}>Delete all local data</button>
        </div>
      </section>

      <div className="rc-row" style={{ marginTop: 4 }}>
        <button className="rc-btn rc-btn-primary" onClick={() => void persist(draft)} disabled={busy}>Save settings</button>
      </div>
    </div>
  );
}

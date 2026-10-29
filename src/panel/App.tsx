import { useEffect, useState } from 'react';
import { AppProvider, t, useApp } from './AppContext';
import { CampaignComposer } from '../features/campaigns/CampaignComposer';
import { QueueScreen } from '../features/campaigns/QueueScreen';
import { ReportsScreen } from '../features/campaigns/ReportsScreen';
import { TemplatesScreen } from '../features/templates/TemplatesScreen';
import { SuppressionScreen } from '../features/suppression/SuppressionScreen';
import { SettingsScreen } from '../features/settings/SettingsScreen';

/**
 * Panel shell: navigation + screens. Rendered both as a standalone dev tab
 * (`npm run dev`) and inside the injected WhatsApp Web side panel.
 */

type Screen = 'compose' | 'queue' | 'reports' | 'templates' | 'suppression' | 'settings';

const NAV: [Screen, string][] = [
  ['compose', 'nav.compose'],
  ['queue', 'nav.queue'],
  ['reports', 'nav.reports'],
  ['templates', 'nav.templates'],
  ['suppression', 'nav.suppression'],
  ['settings', 'nav.settings'],
];

function Shell() {
  const { session, settings } = useApp();
  const [screen, setScreen] = useState<Screen>('compose');
  const [queueCampaignId, setQueueCampaignId] = useState<string | undefined>(undefined);
  const [privacyAcknowledged, setPrivacyAcknowledged] = useState<boolean>(() => {
    try {
      return localStorage.getItem('relay:privacy-ack') === '1';
    } catch {
      return false;
    }
  });

  // Deep-link support: the popup/content toggle can request a screen via URL hash.
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace('#', '') as Screen;
      if (NAV.some(([s]) => s === h)) setScreen(h);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const sessionPill =
    session.loggedIn === true
      ? { cls: 'ok', text: 'WhatsApp Web connected' }
      : session.whatsappTabConnected
        ? { cls: 'warn', text: 'Tab open — waiting for login' }
        : { cls: 'danger', text: 'No WhatsApp Web tab' };

  return (
    <div className="rc-app" data-theme={settings.theme}>
      {!privacyAcknowledged && (
        <div className="rc-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
          <div className="rc-card rc-modal">
            <h2 id="privacy-title">Welcome — privacy &amp; safety</h2>
            <p>{t('privacy.notice')}</p>
            <div className="rc-alert rc-alert-danger" role="alert">
              {t('warning.automation')}
            </div>
            <ul style={{ margin: '8px 0', paddingLeft: 18 }}>
              <li>This build ships only a demo/mock transport — no real messages are sent.</li>
              <li>Only bulk-campaign data you enter is stored locally (IndexedDB + chrome.storage.local).</li>
              <li>The extension never reads your chats or contacts from WhatsApp Web.</li>
              <li>You can erase everything any time in Settings → “Delete all local data”.</li>
            </ul>
            <button
              className="rc-btn rc-btn-primary"
              onClick={() => {
                try {
                  localStorage.setItem('relay:privacy-ack', '1');
                } catch {
                  /* private mode — acknowledge for this session only */
                }
                setPrivacyAcknowledged(true);
              }}
            >
              I understand — open Relay Campaigns
            </button>
          </div>
        </div>
      )}

      <header className="rc-header">
        <img src={chromeLikeAssetUrl('icons/icon-32.png')} alt="" width={26} height={26} />
        <div>
          <strong>{t('app.name')}</strong>
          <span className="rc-sub">{t('app.tagline')} · demo mode</span>
        </div>
        <span className={`rc-pill ${sessionPill.cls}`} title="Session status (shell presence only — chat content is never read)">
          {sessionPill.text}
        </span>
      </header>

      <nav className="rc-tabs" role="tablist" aria-label="Relay Campaigns sections">
        {NAV.map(([key, labelKey]) => (
          <button
            key={key}
            role="tab"
            id={`tab-${key}`}
            aria-selected={screen === key}
            aria-controls={`panel-${key}`}
            className={screen === key ? 'active' : ''}
            onClick={() => setScreen(key)}
          >
            {t(labelKey)}
          </button>
        ))}
      </nav>

      <main
        className="rc-main"
        role="tabpanel"
        id={`panel-${screen}`}
        aria-labelledby={`tab-${screen}`}
        tabIndex={0}
      >
        {screen === 'compose' && (
          <CampaignComposer
            onSaved={(id) => {
              setQueueCampaignId(id);
              setScreen('queue');
            }}
          />
        )}
        {screen === 'queue' && <QueueScreen initialCampaignId={queueCampaignId} />}
        {screen === 'reports' && <ReportsScreen />}
        {screen === 'templates' && <TemplatesScreen />}
        {screen === 'suppression' && <SuppressionScreen />}
        {screen === 'settings' && <SettingsScreen />}
      </main>

      <footer className="rc-footer">
        <span>{t('privacy.notice')}</span>
      </footer>
    </div>
  );
}

/** Icons resolve relative to the document; works in dev tab and in the packed extension. */
function chromeLikeAssetUrl(path: string): string {
  if (typeof chrome !== 'undefined' && chrome.runtime?.getURL) {
    try {
      return chrome.runtime.getURL(path);
    } catch {
      /* not in extension context */
    }
  }
  return '/' + path;
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}

/**
 * Minimal locale-ready string table. All UI copy goes through t() so additional
 * locales can be added without touching components.
 */

type Strings = Record<string, string>;

const en: Strings = {
  'app.name': 'Relay Campaigns',
  'app.tagline': 'Local-first campaign workspace',
  'nav.compose': 'Compose',
  'nav.queue': 'Queue',
  'nav.reports': 'Reports',
  'nav.templates': 'Templates',
  'nav.suppression': 'Consent & Suppression',
  'nav.settings': 'Settings',
  'state.draft': 'Draft',
  'state.ready': 'Ready',
  'state.running': 'Running',
  'state.paused': 'Paused',
  'state.completed': 'Completed',
  'state.stopped': 'Stopped',
  'state.failed': 'Failed',
  'queue.start': 'Start',
  'queue.pause': 'Pause',
  'queue.resume': 'Resume',
  'queue.stop': 'Stop',
  'queue.retryFailed': 'Retry failed',
  'privacy.notice':
    'All campaign data stays on this device (chrome.storage.local + IndexedDB). No telemetry, no tracking pixels, no uploads.',
  'warning.automation':
    'Warning: automating WhatsApp Web is unreliable and may conflict with WhatsApp Terms of Service. Use demo mode unless you have an approved official integration.',
  'consent.confirm': 'I confirm every recipient in this campaign has opted in to receive messages from us.',
};

const tables: Record<string, Strings> = { en };

export function t(key: string, locale = 'en'): string {
  return tables[locale]?.[key] ?? tables['en'][key] ?? key;
}

export function availableLocales(): string[] {
  return Object.keys(tables);
}

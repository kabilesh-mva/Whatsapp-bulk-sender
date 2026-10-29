# Relay Campaigns

A **local-first campaign workspace that lives inside WhatsApp Web** — contact import,
message personalization, a transparent sending queue, per-recipient reports, and
suppression/opt-out protection. All data stays in your browser: no backend, no telemetry,
no tracking pixels, no silent uploads, no uninstall tracking.

> ⚠️ **Compliance warning:** Automating WhatsApp Web is not officially supported by
> WhatsApp and may be unreliable or conflict with WhatsApp's Terms of Service. Only send
> messages to recipients who have explicitly opted in, and review the in-app consent
> screens before starting any campaign.

---

## Features

| Screen | What it does |
| --- | --- |
| **Campaign Composer** | Name a campaign, paste numbers or import CSV/XLSX, map columns, validate & normalize phones to E.164, filter recipients (search / country / named-only / suppressed), personalize with `{{name}}`, `{{company}}` or any imported field, live preview, optional single attachment, save as draft. |
| **Consent & safety** | Mandatory opt-in confirmation, permanent local suppression list (manual add, CSV import, search, remove), optional opt-out phrase matcher for inbound chats, final review screen, operator-controlled delay range and max campaign size. |
| **Sending Queue** | Explicit states (Draft → Ready → Running ⇄ Paused → Completed / Stopped / Failed), live totals (queued / sent / skipped / failed / remaining), Start / Pause / Resume / Stop / Retry-failed, structured event log per recipient. |
| **Reports** | Campaign list with date, status, counts; per-recipient result log with filters and search; CSV export. Delivery/read receipts are *not* claimed unless technically verified. |
| **Templates** | Local reusable templates with categories, tags, search, duplication, delete, variable validation and preview. |
| **Settings** | Default country code, queue defaults, transport selector (Mock demo vs WhatsApp Web), theme (light/dark), locale-ready UI, full data export and "Delete all local data". |

## Project layout

```
src/background     MV3 service worker: storage access, campaign state machine, queue engine
src/content        Runs only on https://web.whatsapp.com/* — detects the page, mounts the panel, message bridge
src/popup          Small toolbar status page + quick-open
src/panel          The injected side-panel React app (isolated via iframe/shadow DOM)
src/features       campaigns · templates · suppression · settings  (UI + feature logic)
src/lib            CSV/XLSX parsing, phone normalization, IndexedDB layer, adapters, reports, i18n
src/types          Shared TypeScript domain models
tests              Vitest unit tests (parsing, phones, variables, suppression, state machine, reports)
public/            manifest.json, icons, _locales (copied verbatim into dist/)
docs/ARCHITECTURE.md
```

## Getting started

### Prerequisites
- Node.js ≥ 20 and npm
- Brave or Chrome (latest)

### Install & develop

```bash
npm install
npm run dev      # Vite dev server for the panel UI (browser preview, no extension APIs)
npm test         # Run the unit test suite (Vitest)
npm run lint     # ESLint
npm run format   # Prettier
```

### Production build

```bash
npm run build    # tsc --noEmit && vite build && verify dist/  →  loadable unpacked extension
```

The build emits a complete unpacked extension in **`dist/`**:

```
dist/manifest.json        ← copied from public/manifest.json by Vite
dist/background.js        ← service worker (fixed name, never hashed)
dist/content.js           ← content script loader (fixed name, never hashed)
dist/panel/index.html     ← injected panel UI (web-accessible iframe page)
dist/popup/index.html     ← toolbar popup
dist/icons/  dist/_locales/  dist/assets/
```

`npm run build` ends with `node scripts/verify_dist.mjs`, which fails the build if any
file referenced by `manifest.json` (service worker, content script, popup, icons,
`_locales`) is missing from `dist/`. Run it alone anytime with `npm run verify:dist`.

If `dist/manifest.json` or `dist/content.js` is missing, your `dist/` is stale — delete
it and rebuild (`rm -rf dist && npm run build`). When loading an unpacked extension,
always pick the **`dist` folder itself**, never the project root.

### Load unpacked in Brave

1. Run `npm run build`.
2. Open `brave://extensions`.
3. Toggle **Developer mode** ON (top-right).
4. Click **Load unpacked** and select the **`dist` folder** (not the project root).
5. Open `https://web.whatsapp.com`, sign in, and the Relay Campaigns panel button appears.
6. After every rebuild: press ⟳ (reload) on the extension card **and** refresh the
   WhatsApp Web tab.

### Load unpacked in Chrome

Identical steps at `chrome://extensions`.

## Privacy model

- **Everything is local.** Campaigns, contacts, templates, suppression entries and reports
  live in IndexedDB and `chrome.storage.local` inside your browser profile. Nothing leaves
  your machine except the messages you explicitly choose to send through your own logged-in
  WhatsApp Web session.
- **Minimum permissions.** `storage`, `alarms`, `tabs`; host permission limited to
  `https://web.whatsapp.com/*`. No cookies permission, no broad host access, no file
  access, no remote code, no analytics.
- **Opt-out protection.** A permanent local suppression list is checked at import, at
  queue time, and (optionally) against inbound messages matching configurable opt-out
  phrases. Suppressed contacts are skipped and logged as `skipped/suppressed`.
- **Delete everything.** Settings → "Delete all local data" wipes IndexedDB, storage keys,
  and queued state in one action, with confirmation.

## Transports & adapter boundary

All messaging goes through the narrow `MessagingAdapter` interface (`src/types/domain.ts`):

```ts
interface MessagingAdapter {
  kind: AdapterKind;                 // 'mock' | 'whatsapp-web'
  isAvailable(): Promise<boolean>;
  send(request: SendRequest): Promise<SendOutcome>;
}
```

- **Mock adapter (default):** simulates sends in demo mode so the whole product is
  testable without messaging anyone. Clearly labelled in the UI.
- **WhatsApp Web adapter:** drives your own logged-in session via the content-script
  bridge. A send is only reported as *sent* when the page acknowledges it — the tool
  fails closed (shows an error) instead of faking success. Runtime DOM integration is
  isolated in `src/content/whatsappRuntime.ts` so it can be replaced wholesale by an
  official WhatsApp Business Platform adapter later.

## Known limitations

- WhatsApp Web automation is unsupported by WhatsApp; selectors can break after any
  WhatsApp update, and aggressive use risks account restrictions. Keep delays conservative
  and volumes small.
- No delivery/read confirmation is claimed — only "hand-off acknowledged by the page".
- One attachment per campaign; size/type validated client-side.
- XLSX parsing runs fully locally but very large sheets (> ~50k rows) should be split.
- The service worker can be suspended by the browser between sends; the queue resumes
  safely, but a long idle pause is expected behaviour, not a bug.

## Testing

```bash
npm test              # single run
npm run test:watch    # interactive
```

Coverage: phone normalization/validation, CSV+XLSX import mapping, duplicate/malformed
detection, `{{variable}}` substitution, suppression matching, queue state-machine
transitions, report CSV export.

## Release checklist (Brave)

- [ ] `npm run lint && npm run build` passes with zero errors
- [ ] `npm test` green (all suites)
- [ ] `dist/manifest.json` exists and lists only `storage`, `alarms`, `tabs` + `https://web.whatsapp.com/*`
- [ ] Load unpacked via `brave://extensions` → Developer mode → select `dist/`
- [ ] Panel opens on web.whatsapp.com; no unrelated page elements altered
- [ ] Demo (mock) campaign completes end-to-end with correct counts
- [ ] Suppressed contact is skipped and appears in the event log
- [ ] Report CSV exports and re-imports cleanly
- [ ] "Delete all local data" empties IndexedDB + storage
- [ ] Light/dark themes both readable

## License

Source is original to this project. The `wasender-inspection-copy/` folder (kept out of
version control) was used only as third-party reference material and is not part of the
build or distribution.

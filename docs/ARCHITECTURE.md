# Architecture — Relay Campaigns

Local-first Chrome MV3 extension. No backend; every byte of campaign data lives in the
operator's browser profile.

## 1. Service worker (`src/background`)

`index.ts` is the single orchestration entry point:

- **Message bridge server** — receives typed `BridgeRequest`s from the panel/popup via
  `chrome.runtime.onMessage` and long-lived `Port`s (for progress events).
- **Campaign state machine** (`stateMachine.ts`) — pure, unit-tested reducer over the
  explicit states `draft → ready → running ⇄ paused → completed | stopped | failed`.
  Illegal transitions are rejected centrally, never in UI code.
- **Queue engine** (`queueEngine.ts`) — walks the recipient list one at a time, applies
  randomized delays between `minDelayMs`/`maxDelayMs`, checks the suppression store before
  each send, writes a structured `RecipientResult` event per recipient, and survives
  service-worker suspension by persisting cursor state to `chrome.storage.local`
  (`chrome.alarms` re-arms the loop after idle).
- The engine refuses to continue when the WhatsApp Web tab/session disappears; the
  operator sees exactly what will happen and must confirm re-attachment.

## 2. Content script (`src/content`)

Declared in the manifest with match pattern `https://web.whatsapp.com/*` only.

- `index.ts` — mounts the UI: creates a single host element + iframe pointing at
  `panel/index.html`, so all React state/CSP live inside our extension origin and no
  WhatsApp DOM/styles are mutated beyond that one container. Provides show/hide/toggle.
- `whatsappRuntime.ts` — **the only module that touches WhatsApp DOM.** It implements the
  send routine (open chat by E.164 link, type message, attach if present, click send,
  verify hand-off) and answers bridge `send` requests with an explicit ack or error.
  Success is reported only on verified ack — fail-closed by design.
- Inbound opt-out matching observes only conversations the queue itself opened, never bulk
  history scraping.

## 3. Local database (`src/lib/db.ts`, `src/lib/localEngine.ts`)

- **IndexedDB** stores bulk records: campaigns, contacts, recipient results, templates,
  suppression entries (object stores keyed by id, secondary indexes on campaignId/status).
- **chrome.storage.local** stores small hot state: settings, queue cursor, adapter choice,
  session snapshot. Splitting keeps large lists out of storage quotas and makes "Delete all
  local data" a two-step wipe (drop IndexedDB databases + clear namespaced keys).
- All schemas are versioned; migrations run on `onupgradeneeded`.

## 4. Adapter boundary (`src/types/domain.ts` + `src/lib/adapters`)

```
QueueEngine ──► MessagingAdapter (interface)
                  ├── MockMessagingAdapter          (demo, default)
                  └── WhatsAppWebMessagingAdapter   (acks via content-script port)
                        └── whatsappRuntime.ts      (isolated DOM integration)
```

The engine knows nothing about DOM selectors, tabs, or WhatsApp internals — only
`isAvailable()` and `send(request): Promise<SendOutcome>`. Swapping in an official
WhatsApp Business Platform adapter later means adding one class and a settings toggle;
no queue, storage, or UI changes. Runtime WhatsApp specifics are quarantined in exactly
one file so they can be deleted without touching product logic.

## 5. UI layers

- `src/panel` — full React app (composer, queue, reports, templates, suppression,
  settings) rendered inside the injected iframe; talks to background exclusively through
  the typed bridge (`src/lib/bridge.ts`).
- `src/popup` — read-only status card + "Open panel" action.
- Feature folders own their screens; shared logic lives in `src/lib`; domain types in
  `src/types`. Tests in `/tests` cover parsing, phones, variables, suppression, state
  machine, and report export.

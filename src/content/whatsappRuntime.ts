/**
 * whatsappRuntime — the ONLY module that touches WhatsApp Web's DOM for message
 * transport. It is deliberately isolated so it can be deleted or replaced with an
 * official WhatsApp Business Platform adapter without touching anything else.
 *
 * Privacy boundary: this module only ever (a) checks whether the logged-in shell is
 * rendered, and (b) types a single outbound message into the chat composer of the
 * currently open chat and confirms it was accepted by the page. It never reads chat
 * history, contacts, or any unrelated messages.
 *
 * Reliability note: WhatsApp Web is a closed, frequently-changing SPA. Selector-based
 * automation may break at any time and may conflict with WhatsApp's Terms of Service.
 * That is why every attempt requires an explicit acknowledgement from the page before
 * the queue records "sent" — we never claim success blindly.
 */

export interface RuntimeSendRequest {
  /** E.164 number — used to open the chat via the wa.me deep link. */
  toNormalizedPhone: string;
  text: string;
  attachment?: { fileName: string; mimeType: string; sizeBytes: number };
}

export type RuntimeSendResult = { ok: boolean; errorCode?: string; errorMessage?: string };

const CHAT_OPEN_WAIT_MS = 15_000;
const POLL_MS = 250;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitFor<T>(fn: () => T | null, timeoutMs: number): Promise<T | null> {
  const start = Date.now();
  for (;;) {
    const v = fn();
    if (v) return v;
    if (Date.now() - start > timeoutMs) return null;
    await sleep(POLL_MS);
  }
}

function isLoggedIn(): boolean {
  return !!document.querySelector('#app .app-wrapper-web, #app [role="application"], #side');
}

/** The main chat panel (right side). Null while on the empty/welcome screen. */
function chatPanel(): Element | null {
  return document.querySelector('#main');
}

function composerInput(): HTMLElement | null {
  // The message box is contenteditable div[contenteditable="true"][data-tab="5"] in
  // current builds; fall back to any contenteditable inside #main excluding search.
  const scoped = document.querySelector<HTMLElement>('#main div[contenteditable="true"][data-tab="5"]');
  if (scoped) return scoped;
  return document.querySelector<HTMLElement>('#main div[contenteditable="true"]:not([data-tab="3"])');
}

function sendButton(): HTMLElement | null {
  return document.querySelector<HTMLElement>('span[data-icon="send"]')?.closest('button, span[role="button"], div[role="button"]') as HTMLElement | null;
}

function focusInto(el: HTMLElement): void {
  el.scrollIntoView({ block: 'center' });
  const sel = window.getSelection();
  try {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
  } catch {
    /* selection best-effort */
  }
  el.focus();
}

/** Type text into the composer the way a user would, so React picks up the input. */
function typeIntoComposer(el: HTMLElement, text: string): void {
  el.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, data: '', inputType: 'deleteContentBackward' }));
  // Insert as plain text lines; WhatsApp expands "\n" itself when typing Enter sequences,
  // so we set the whole block then confirm once.
  el.textContent = text;
  el.dispatchEvent(
    new InputEvent('beforeinput', { bubbles: true, composed: true, inputType: 'insertText', data: text }),
  );
  el.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, inputType: 'insertText', data: text }));
}

function pressEnter(el: HTMLElement): void {
  el.dispatchEvent(
    new KeyboardEvent('keydown', { bubbles: true, composed: true, cancelable: true, key: 'Enter', code: 'Enter', keyCode: 13, which: 13 }),
  );
  el.dispatchEvent(
    new KeyboardEvent('keyup', { bubbles: true, composed: true, key: 'Enter', code: 'Enter', keyCode: 13, which: 13 }),
  );
}

/**
 * Attempt one send against the currently-rendered WhatsApp Web UI.
 * Returns a real acknowledgement: ok=true only when the composer emptied after the
 * send action (the page consumed the input), which is the strongest signal available
 * without touching private runtime internals. No delivery/read receipts are claimed.
 */
export async function sendViaWhatsAppWeb(req: RuntimeSendRequest): Promise<RuntimeSendResult> {
  if (!isLoggedIn()) {
    return { ok: false, errorCode: 'NOT_LOGGED_IN', errorMessage: 'WhatsApp Web is not logged in in this tab.' };
  }

  // Ensure the target chat is open: the operator must have the chat selected, or we
  // open it through the standard wa.me deep link handled by WhatsApp Web itself.
  let panel = chatPanel();
  if (!panel) {
    window.location.hash = `#_=_${encodeURIComponent(`https://wa.me/${req.toNormalizedPhone.replace('+', '')}`)}`;
    panel = await waitFor(chatPanel, CHAT_OPEN_WAIT_MS);
    if (!panel) {
      return {
        ok: false,
        errorCode: 'CHAT_NOT_OPEN',
        errorMessage: 'Could not open a chat for this number. Verify the number exists on WhatsApp, or open the chat manually and retry.',
      };
    }
  }

  const input = await waitFor(composerInput, CHAT_OPEN_WAIT_MS);
  if (!input) {
    return { ok: false, errorCode: 'COMPOSER_NOT_FOUND', errorMessage: 'Message composer not found — WhatsApp Web layout may have changed.' };
  }

  if (req.attachment) {
    // Attachments are NOT automated in this build (no reliable file-input path without
    // extra permissions). Fail explicitly instead of silently dropping them.
    return {
      ok: false,
      errorCode: 'ATTACHMENT_UNSUPPORTED',
      errorMessage: `Attachment "${req.attachment.fileName}" cannot be sent automatically in this build. Remove the attachment or send it manually.`,
    };
  }

  focusInto(input);
  typeIntoComposer(input, req.text);
  await sleep(150);

  const btn = sendButton();
  if (btn) {
    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, composed: true, cancelable: true }));
    btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, composed: true, cancelable: true }));
    btn.click();
  } else {
    pressEnter(input);
  }

  // Acknowledgement: composer should empty once the page accepted the message.
  const cleared = await waitFor(() => ((input.textContent ?? '').trim().length === 0 ? true : null), 8_000);
  if (!cleared) {
    return {
      ok: false,
      errorCode: 'PAGE_SEND_UNCONFIRMED',
      errorMessage: 'The message stayed in the composer — the page did not accept it. Check the tab and retry.',
    };
  }
  return { ok: true };
}

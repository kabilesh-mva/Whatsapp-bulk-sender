import type { MessagingAdapter, OutgoingMessage, SendOutcome } from '../../types/domain';

/**
 * Mock adapter — the default transport for demo/testing mode.
 * It never touches WhatsApp or the network; it simulates latency and an optional,
 * deterministic failure rate so queue states (sent/failed/retry) are exercised safely.
 */
export class MockMessagingAdapter implements MessagingAdapter {
  readonly kind = 'mock' as const;
  readonly label = 'Demo mode (mock transport — no messages are sent)';

  private counter = 0;
  private readonly failEvery: number;
  private readonly latencyMs: [number, number];

  constructor(opts?: { failEvery?: number; latencyMs?: [number, number] }) {
    this.failEvery = opts?.failEvery ?? 0; // 0 = never fail
    this.latencyMs = opts?.latencyMs ?? [150, 400];
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }

  async send(message: OutgoingMessage): Promise<SendOutcome> {
    const [lo, hi] = this.latencyMs;
    await new Promise((r) => setTimeout(r, lo + Math.random() * (hi - lo)));
    if (!message.toNormalizedPhone?.startsWith('+')) {
      return { ok: false, retryable: false, errorCode: 'INVALID_NUMBER', errorMessage: 'Not an E.164 number' };
    }
    this.counter++;
    if (this.failEvery > 0 && this.counter % this.failEvery === 0) {
      return {
        ok: false,
        retryable: true,
        errorCode: 'MOCK_SIMULATED_FAILURE',
        errorMessage: 'Simulated transient failure (demo mode)',
      };
    }
    return { ok: true };
  }
}

/**
 * WhatsApp Web adapter.
 *
 * This module is the ONLY place where WhatsApp Web runtime integration lives, so it can
 * later be replaced by an official WhatsApp Business Platform adapter without touching
 * the queue engine or UI. The actual DOM/runtime bridge into WhatsApp Web is isolated in
 * `src/content/whatsappRuntime.ts`; this class talks to it through a narrow port check:
 *
 *  1. A logged-in WhatsApp Web tab must be connected (content-script session port).
 *  2. The operator must have explicitly selected "WhatsApp Web" in Settings → Transport.
 *
 * If either condition fails, `isAvailable()` returns false and `send()` refuses with
 * `ADAPTER_UNAVAILABLE` — the queue pauses instead of recording fake successes. Messages
 * are dispatched to the connected tab and we wait for a real acknowledgement from the
 * page before reporting `sent`. No delivery/read receipts are claimed.
 *
 * Before relying on this transport, review: WhatsApp Terms of Service, applicable
 * anti-spam law (e.g. TCPA/GDPR), and informed consent of every recipient.
 */
export interface WhatsAppWebBridge {
  /** True when a logged-in WhatsApp Web tab is connected via the content script. */
  isTabConnected(): boolean;
  /** Ask the connected tab to deliver one message; resolves with a page ack or error. */
  dispatch(message: OutgoingMessage): Promise<{ ok: boolean; errorCode?: string; errorMessage?: string }>;
}

export class WhatsAppWebMessagingAdapter implements MessagingAdapter {
  readonly kind = 'whatsapp-web' as const;
  readonly label = 'WhatsApp Web adapter (experimental — automation may be unreliable)';

  constructor(private readonly bridge: WhatsAppWebBridge) {}

  async isAvailable(): Promise<boolean> {
    try {
      return this.bridge.isTabConnected();
    } catch {
      return false;
    }
  }

  async send(message: OutgoingMessage): Promise<SendOutcome> {
    if (!message.toNormalizedPhone?.startsWith('+')) {
      return { ok: false, retryable: false, errorCode: 'INVALID_NUMBER', errorMessage: 'Not an E.164 number' };
    }
    if (!this.bridge.isTabConnected()) {
      return {
        ok: false,
        retryable: true,
        errorCode: 'ADAPTER_UNAVAILABLE',
        errorMessage: 'No connected WhatsApp Web tab. Open web.whatsapp.com, log in, then Resume.',
      };
    }
    try {
      const ack = await this.bridge.dispatch(message);
      if (ack.ok) return { ok: true };
      return {
        ok: false,
        retryable: true,
        errorCode: ack.errorCode ?? 'PAGE_SEND_FAILED',
        errorMessage: ack.errorMessage ?? 'WhatsApp Web page did not acknowledge the message.',
      };
    } catch (e) {
      return {
        ok: false,
        retryable: true,
        errorCode: 'PAGE_SEND_ERROR',
        errorMessage: e instanceof Error ? e.message : String(e),
      };
    }
  }
}

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
 * WhatsApp Web adapter placeholder.
 *
 * This file is the ONLY place where a future WhatsApp Web runtime integration would live.
 * It is intentionally inert: it reports unavailable and refuses to send. Real integration
 * (or replacement with an official WhatsApp Business Platform adapter) must be implemented
 * here and nowhere else, keeping the queue orchestrator and UI transport-agnostic.
 *
 * Before any real transport is enabled, review: WhatsApp Terms of Service, applicable
 * anti-spam law (e.g. TCPA/GDPR), and informed consent of every recipient.
 */
export class WhatsAppWebMessagingAdapterPlaceholder implements MessagingAdapter {
  readonly kind = 'whatsapp-web-placeholder' as const;
  readonly label = 'WhatsApp Web adapter (not implemented — placeholder only)';

  async isAvailable(): Promise<boolean> {
    return false;
  }

  async send(_message: OutgoingMessage): Promise<SendOutcome> {
    return {
      ok: false,
      retryable: false,
      errorCode: 'ADAPTER_NOT_IMPLEMENTED',
      errorMessage:
        'The WhatsApp Web transport is a placeholder in this build. Only the mock/demo adapter is active.',
    };
  }
}

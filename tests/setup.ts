/**
 * Vitest setup: jsdom does not provide crypto.randomUUID in all versions,
 * and some modules reference it at import time. Provide a deterministic-enough
 * polyfill so unit tests can run without the browser extension APIs.
 */
import { webcrypto } from 'node:crypto';

if (typeof globalThis.crypto === 'undefined') {
  // @ts-expect-error - assigning polyfill in test env only
  globalThis.crypto = webcrypto;
}

if (typeof globalThis.crypto.randomUUID !== 'function') {
  Object.defineProperty(globalThis.crypto, 'randomUUID', {
    value: () => {
      const bytes = new Uint8Array(16);
      webcrypto.getRandomValues(bytes);
      bytes[6] = (bytes[6] & 0x0f) | 0x40;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      const hex = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    },
  });
}

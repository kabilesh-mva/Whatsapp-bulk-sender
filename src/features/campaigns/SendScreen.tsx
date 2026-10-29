import { useCallback, useEffect, useRef, useState } from 'react';
import type { CountryCode } from 'libphonenumber-js';
import type { AttachmentMetadata, Campaign, Contact, QueueSummary } from '../../types/domain';
import { request, subscribe } from '../../lib/bridge';
import { normalizePhone } from '../../lib/phone';
import { parseSpreadsheetFile } from '../../lib/importParser';
import { formatBytes, validateAttachment } from '../../lib/attachments';
import { useApp } from '../../panel/AppContext';

interface CountryOption {
  code: CountryCode;
  dial: string;
  name: string;
  flag: string;
}

const COMMON_COUNTRIES: CountryOption[] = [
  { code: 'IN', dial: '91', name: 'India', flag: '🇮🇳' },
  { code: 'US', dial: '1', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', dial: '44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AE', dial: '971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'SA', dial: '966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'CA', dial: '1', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', dial: '61', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', dial: '49', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', dial: '33', name: 'France', flag: '🇫🇷' },
  { code: 'BR', dial: '55', name: 'Brazil', flag: '🇧🇷' },
  { code: 'ID', dial: '62', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'PK', dial: '92', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'BD', dial: '880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'NG', dial: '234', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'ZA', dial: '27', name: 'South Africa', flag: '🇿🇦' },
  { code: 'SG', dial: '65', name: 'Singapore', flag: '🇸🇬' },
  { code: 'MY', dial: '60', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'ES', dial: '34', name: 'Spain', flag: '🇪🇸' },
  { code: 'IT', dial: '39', name: 'Italy', flag: '🇮🇹' },
  { code: 'MX', dial: '52', name: 'Mexico', flag: '🇲🇽' },
];

export function SendScreen({ onGoToReports }: { onGoToReports?: () => void }) {
  const { settings } = useApp();

  // Selected Country
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(() => {
    const defaultCode = (settings.defaultCountryCode || 'IN').toUpperCase();
    return COMMON_COUNTRIES.find((c) => c.code === defaultCode) ?? COMMON_COUNTRIES[0];
  });

  // Contacts & Input State
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [phoneInput, setPhoneInput] = useState('');
  const [showBulkPasteModal, setShowBulkPasteModal] = useState(false);
  const [bulkPasteText, setBulkPasteText] = useState('');

  // Message
  const [message, setMessage] = useState('Hi');
  const [unsubscribeOption, setUnsubscribeOption] = useState(false);

  // Attachment
  const [attachment, setAttachment] = useState<AttachmentMetadata | null>(null);

  // Status & Queue
  const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);
  const [queueSummary, setQueueSummary] = useState<QueueSummary | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check for currently running campaign
  const refreshActiveCampaign = useCallback(async () => {
    try {
      const list = await request<Campaign[]>({ type: 'campaign/list' });
      const running = list.find((c) => c.state === 'running' || c.state === 'paused');
      if (running) {
        setActiveCampaignId(running.id);
        setActiveCampaign(running);
        const sum = await request<QueueSummary>({ type: 'campaign/summary', id: running.id });
        setQueueSummary(sum);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    void refreshActiveCampaign();
    const unsub = subscribe((evt) => {
      if (evt.type === 'event' && evt.name === 'queue:updated') {
        if (evt.campaignId === activeCampaignId) {
          setQueueSummary(evt.summary);
          void request<Campaign>({ type: 'campaign/get', id: evt.campaignId }).then(setActiveCampaign);
        }
      }
    });
    return unsub;
  }, [activeCampaignId, refreshActiveCampaign]);

  // Robust phone parser & normalizer
  const parseSingleNumber = useCallback(
    (raw: string): { phoneStr: string; normalized: string | null } | null => {
      const trimmed = raw.trim();
      if (!trimmed) return null;

      // Keep only digits and optional leading +
      let digits = trimmed.replace(/[^\d+]/g, '');
      if (!digits) return null;

      let withPlus = '';
      if (digits.startsWith('+')) {
        withPlus = digits;
      } else if (digits.startsWith('00')) {
        withPlus = '+' + digits.slice(2);
      } else if (digits.startsWith(selectedCountry.dial) && digits.length > 10) {
        // Already has country code like 919876543210 (12 digits)
        withPlus = '+' + digits;
      } else {
        // Standard national number (e.g. 10 digits for India/US)
        withPlus = `+${selectedCountry.dial}${digits.replace(/^0+/, '')}`;
      }

      const norm = normalizePhone(withPlus, selectedCountry.code);
      return {
        phoneStr: withPlus,
        normalized: norm.e164 ?? withPlus,
      };
    },
    [selectedCountry],
  );

  // Add numbers to contacts list
  const addNumbers = useCallback(
    (rawList: string[]) => {
      const existingKeys = new Set(contacts.map((c) => c.normalizedPhone ?? c.phone));
      const nextContacts = [...contacts];
      let added = 0;

      for (const item of rawList) {
        const parsed = parseSingleNumber(item);
        if (!parsed) continue;

        const key = parsed.normalized ?? parsed.phoneStr;
        if (!existingKeys.has(key)) {
          existingKeys.add(key);
          nextContacts.push({
            id: crypto.randomUUID(),
            phone: parsed.phoneStr,
            normalizedPhone: parsed.normalized,
            fields: {},
            consentStatus: 'opted_in',
            source: 'manual',
            createdAt: Date.now(),
          });
          added++;
        }
      }

      if (added > 0) {
        setContacts(nextContacts);
        setNotice(`Added ${added} number${added > 1 ? 's' : ''}`);
        setTimeout(() => setNotice(null), 2500);
      }
    },
    [contacts, parseSingleNumber],
  );

  // Commit whatever is currently typed in the phone input
  const commitCurrentPhone = () => {
    if (phoneInput.trim()) {
      addNumbers([phoneInput]);
      setPhoneInput('');
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault();
      commitCurrentPhone();
    } else if (e.key === 'Backspace' && !phoneInput && contacts.length > 0) {
      setContacts((prev) => prev.slice(0, -1));
    }
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    if (!paste) return;
    const split = paste.split(/[\s,\n\r;\t]+/);
    addNumbers(split);
    setPhoneInput('');
  };

  const removeContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const clearAllContacts = () => {
    setContacts([]);
    setPhoneInput('');
  };

  // Bulk paste submit
  const handleBulkPasteSubmit = () => {
    if (bulkPasteText.trim()) {
      const split = bulkPasteText.split(/[\s,\n\r;\t]+/);
      addNumbers(split);
      setBulkPasteText('');
    }
    setShowBulkPasteModal(false);
  };

  // Import file (.xlsx, .xls, .csv, .txt)
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      const name = file.name.toLowerCase();
      let numbersFound: string[] = [];

      if (name.endsWith('.txt')) {
        const text = await file.text();
        numbersFound = text.split(/[\r\n,;\t]+/);
      } else {
        const tabular = await parseSpreadsheetFile(file);
        const headers = tabular.headers;
        const phoneCol =
          headers.find((h) => /phone|mobile|number|tel|contact/i.test(h)) ?? headers[0];
        if (phoneCol) {
          numbersFound = tabular.rows.map((r) => r[phoneCol]).filter(Boolean);
        }
      }

      if (numbersFound.length === 0) {
        setError('No phone numbers found in file.');
      } else {
        addNumbers(numbersFound);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to import file.');
    } finally {
      if (importInputRef.current) importInputRef.current.value = '';
    }
  };

  // Attachment handling
  const handleAttachmentChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    const val = validateAttachment(file);
    if (!val.ok) {
      setError(val.error ?? 'Invalid file.');
      return;
    }

    try {
      const meta: AttachmentMetadata = {
        fileName: file.name,
        mimeType: file.type || 'application/octet-stream',
        sizeBytes: file.size,
        dataKey: crypto.randomUUID(),
      };
      setAttachment(meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not attach file.');
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeAttachment = () => {
    setAttachment(null);
  };

  // Insert variable into message
  const insertVariable = (varName: string) => {
    if (!textareaRef.current) return;
    const start = textareaRef.current.selectionStart ?? message.length;
    const end = textareaRef.current.selectionEnd ?? message.length;
    const next = message.slice(0, start) + `{{${varName}}}` + message.slice(end);
    setMessage(next);
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(start + varName.length + 4, start + varName.length + 4);
    }, 50);
  };

  // Send action
  const handleSend = async () => {
    setError(null);

    // Auto-commit whatever is currently typed in phoneInput
    let currentContacts = [...contacts];
    if (phoneInput.trim()) {
      const parsed = parseSingleNumber(phoneInput);
      if (parsed) {
        const key = parsed.normalized ?? parsed.phoneStr;
        if (!currentContacts.some((c) => (c.normalizedPhone ?? c.phone) === key)) {
          const newC: Contact = {
            id: crypto.randomUUID(),
            phone: parsed.phoneStr,
            normalizedPhone: parsed.normalized,
            fields: {},
            consentStatus: 'opted_in',
            source: 'manual',
            createdAt: Date.now(),
          };
          currentContacts.push(newC);
          setContacts(currentContacts);
          setPhoneInput('');
        }
      }
    }

    if (currentContacts.length === 0) {
      setError('Please enter at least one phone number.');
      phoneInputRef.current?.focus();
      return;
    }
    if (!message.trim()) {
      setError('Message cannot be empty.');
      textareaRef.current?.focus();
      return;
    }

    let finalBody = message.trim();
    if (unsubscribeOption && !/stop|unsubscribe/i.test(finalBody)) {
      finalBody += '\n\nReply STOP to unsubscribe';
    }

    setBusy(true);
    try {
      const campaignId = crypto.randomUUID();
      const campaign: Campaign = {
        id: campaignId,
        name: `Campaign - ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}`,
        messageTemplate: {
          body: finalBody,
          attachment: attachment ?? undefined,
        },
        contactIds: currentContacts.map((c) => c.id),
        state: 'ready',
        settings: {
          minDelayMs: 2000,
          maxDelayMs: 5000,
          maxRecipients: 500,
          requireFinalConfirmation: false,
          consentConfirmed: true,
          locale: 'en',
        },
        createdAt: Date.now(),
        startedAt: null,
        completedAt: null,
      };

      await request<Campaign>({ type: 'campaign/saveDraft', campaign, contacts: currentContacts });
      await request({ type: 'campaign/start', id: campaignId });

      setActiveCampaignId(campaignId);
      setActiveCampaign(campaign);
      setQueueSummary({
        total: currentContacts.length,
        queued: currentContacts.length,
        sent: 0,
        skipped: 0,
        failed: 0,
        remaining: currentContacts.length,
      });

      // Clear input after starting
      setContacts([]);
      setPhoneInput('');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  };

  // Queue actions
  const handleQueueAction = async (action: 'pause' | 'resume' | 'stop') => {
    if (!activeCampaignId) return;
    setBusy(true);
    try {
      if (action === 'pause') await request({ type: 'campaign/pause', id: activeCampaignId });
      else if (action === 'resume') await request({ type: 'campaign/resume', id: activeCampaignId });
      else if (action === 'stop') await request({ type: 'campaign/stop', id: activeCampaignId });
      await refreshActiveCampaign();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  };

  const isSending = activeCampaign?.state === 'running';
  const isPaused = activeCampaign?.state === 'paused';
  const isCompleted = activeCampaign?.state === 'completed' || activeCampaign?.state === 'stopped';

  return (
    <div className="wa-send-container">
      {error && (
        <div className="wa-alert wa-alert-danger" role="alert">
          {error}
        </div>
      )}
      {notice && <div className="wa-alert wa-alert-info">{notice}</div>}

      {/* Contacts Card */}
      <div className="wa-card">
        <div className="wa-card-header">
          <div className="wa-card-title">
            <span className="wa-icon">📇</span> Contacts
          </div>
          <button
            type="button"
            className="wa-btn-import"
            onClick={() => importInputRef.current?.click()}
            title="Import Excel or CSV file"
          >
            <span className="wa-excel-icon">📊</span> Import
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept=".xlsx,.xls,.csv,.txt"
            style={{ display: 'none' }}
            onChange={handleImportFile}
          />
        </div>

        {/* Input Bar: Country Code + Chips + Interactive Input + Trash */}
        <div
          className="wa-phone-input-bar"
          onClick={() => phoneInputRef.current?.focus()}
        >
          {/* Country Selector */}
          <div
            className="wa-country-select-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <select
              className="wa-country-select"
              value={selectedCountry.code}
              onChange={(e) => {
                const found = COMMON_COUNTRIES.find((c) => c.code === e.target.value);
                if (found) setSelectedCountry(found);
              }}
              title="Select country code"
            >
              {COMMON_COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.dial}
                </option>
              ))}
            </select>
            <span className="wa-country-arrow">⌄</span>
          </div>

          {/* Chips & Text Input */}
          <div className="wa-chips-area">
            {contacts.map((c) => (
              <span key={c.id} className="wa-phone-chip">
                {c.normalizedPhone ?? c.phone}
                <button
                  type="button"
                  className="wa-chip-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeContact(c.id);
                  }}
                  title="Remove number"
                >
                  ×
                </button>
              </span>
            ))}
            <input
              ref={phoneInputRef}
              type="text"
              className="wa-phone-text-input"
              placeholder={contacts.length === 0 ? 'Enter phonenumber' : 'Add another...'}
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              onKeyDown={handlePhoneKeyDown}
              onPaste={handlePhonePaste}
              onBlur={commitCurrentPhone}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Clear Button */}
          {contacts.length > 0 && (
            <button
              type="button"
              className="wa-btn-clear"
              onClick={(e) => {
                e.stopPropagation();
                clearAllContacts();
              }}
              title="Clear all numbers"
            >
              🗑️
            </button>
          )}
        </div>

        {/* Subrow: Numbers count | Filter / Paste link */}
        <div className="wa-subrow">
          <span className="wa-subnote">
            Numbers: <strong>{contacts.length + (phoneInput.trim() ? 1 : 0)}</strong>
          </span>
          <div className="wa-subrow-links">
            <button
              type="button"
              className="wa-link-btn"
              onClick={() => setShowBulkPasteModal(true)}
            >
              📋 Paste multiple numbers
            </button>
          </div>
        </div>
      </div>

      {/* Optional Bulk Paste Modal */}
      {showBulkPasteModal && (
        <div className="wa-modal-backdrop" onClick={() => setShowBulkPasteModal(false)}>
          <div className="wa-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="wa-card-header">
              <strong style={{ fontSize: '14px' }}>📋 Paste Phone Numbers</strong>
              <button
                type="button"
                className="wa-chip-remove"
                style={{ fontSize: '18px' }}
                onClick={() => setShowBulkPasteModal(false)}
              >
                ×
              </button>
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 8px' }}>
              Paste numbers separated by commas, spaces, or newlines (e.g. from Excel or WhatsApp).
            </p>
            <textarea
              className="wa-textarea"
              rows={6}
              placeholder="9876543210&#10;9123456789&#10;+91 98765 43210"
              value={bulkPasteText}
              onChange={(e) => setBulkPasteText(e.target.value)}
              autoFocus
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '10px' }}>
              <button
                type="button"
                className="wa-btn-secondary"
                onClick={() => setShowBulkPasteModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="wa-btn-primary"
                onClick={handleBulkPasteSubmit}
              >
                Add Numbers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message Box Card */}
      <div className="wa-card">
        <div className="wa-card-header">
          <div className="wa-card-title">
            <span className="wa-icon">💬</span> Message box
          </div>
        </div>

        <textarea
          ref={textareaRef}
          className="wa-textarea"
          rows={6}
          placeholder="Hi"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Attachment preview if any */}
        {attachment && (
          <div className="wa-attachment-chip">
            <span>📎 {attachment.fileName} ({formatBytes(attachment.sizeBytes)})</span>
            <button type="button" onClick={removeAttachment} title="Remove attachment">
              ×
            </button>
          </div>
        )}

        <div className="wa-message-footer">
          <div className="wa-message-footer-left">
            <button
              type="button"
              className="wa-btn-link"
              onClick={() => fileInputRef.current?.click()}
            >
              📎 Attach a file (max 8MB)
            </button>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleAttachmentChange}
            />

            <label className="wa-checkbox-label">
              <input
                type="checkbox"
                checked={unsubscribeOption}
                onChange={(e) => setUnsubscribeOption(e.target.checked)}
              />
              <span>Unsubscribe option</span>
            </label>
          </div>

          <div className="wa-message-footer-right">
            <button
              type="button"
              className="wa-btn-link wa-btn-var"
              onClick={() => insertVariable('name')}
              title="Insert {{name}} variable into message"
            >
              {'+ Add {{name}}'}
            </button>
          </div>
        </div>
      </div>

      {/* Send Button */}
      <div className="wa-actions-row">
        <button
          type="button"
          className="wa-btn-send"
          disabled={busy || (contacts.length === 0 && !phoneInput.trim()) || !message.trim() || isSending}
          onClick={handleSend}
        >
          {busy
            ? 'Preparing...'
            : isSending
              ? 'Sending in progress...'
              : 'Send'}
        </button>
      </div>

      {/* Active Sending Queue Status */}
      {(isSending || isPaused || (isCompleted && queueSummary)) && (
        <div className="wa-card wa-queue-card">
          <div className="wa-card-header">
            <strong>
              {isSending
                ? '🚀 Sending Messages...'
                : isPaused
                  ? '⏸ Sending Paused'
                  : '✔ Campaign Complete'}
            </strong>
            <div className="wa-queue-controls">
              {isSending && (
                <button
                  type="button"
                  className="wa-btn-small"
                  onClick={() => handleQueueAction('pause')}
                >
                  ⏸ Pause
                </button>
              )}
              {isPaused && (
                <button
                  type="button"
                  className="wa-btn-small wa-btn-primary-small"
                  onClick={() => handleQueueAction('resume')}
                >
                  ▶ Resume
                </button>
              )}
              {(isSending || isPaused) && (
                <button
                  type="button"
                  className="wa-btn-small wa-btn-danger-small"
                  onClick={() => handleQueueAction('stop')}
                >
                  ⏹ Stop
                </button>
              )}
              {isCompleted && onGoToReports && (
                <button
                  type="button"
                  className="wa-btn-small wa-btn-primary-small"
                  onClick={onGoToReports}
                >
                  View in Reports →
                </button>
              )}
            </div>
          </div>

          {queueSummary && (
            <>
              <div className="wa-progress-bar">
                <div
                  className="wa-progress-fill"
                  style={{
                    width: `${Math.round(
                      ((queueSummary.sent + queueSummary.failed) / Math.max(queueSummary.total, 1)) * 100,
                    )}%`,
                  }}
                />
              </div>

              <div className="wa-queue-stats">
                <span className="wa-stat-badge">Total: {queueSummary.total}</span>
                <span className="wa-stat-badge wa-stat-success">Sent: {queueSummary.sent}</span>
                <span className="wa-stat-badge wa-stat-warning">Failed: {queueSummary.failed}</span>
                <span className="wa-stat-badge wa-stat-info">Pending: {queueSummary.queued}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

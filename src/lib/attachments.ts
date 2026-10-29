/**
 * Attachment validation rules (single attachment per campaign).
 * Kept in lib so both the composer UI and tests share one source of truth.
 */

export const MAX_ATTACHMENT_BYTES = 16 * 1024 * 1024; // 16 MiB

export const ALLOWED_ATTACHMENT_TYPES: Record<string, string[]> = {
  'image/': ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  'document/': [
    'application/pdf',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ],
  'audio/': ['audio/mpeg', 'audio/ogg', 'audio/mp4', 'audio/aac'],
  'video/': ['video/mp4', 'video/3gpp', 'video/webm'],
};

const ALL_ALLOWED = Object.values(ALLOWED_ATTACHMENT_TYPES).flat();

export interface AttachmentValidation {
  ok: boolean;
  error?: string;
}

export function validateAttachment(file: { name: string; type: string; size: number }): AttachmentValidation {
  if (!file.name) return { ok: false, error: 'File has no name.' };
  if (file.size <= 0) return { ok: false, error: 'File is empty.' };
  if (file.size > MAX_ATTACHMENT_BYTES) {
    return {
      ok: false,
      error: `File is ${(file.size / 1024 / 1024).toFixed(1)} MB — the limit is ${MAX_ATTACHMENT_BYTES / 1024 / 1024} MB.`,
    };
  }
  const type = file.type || guessTypeFromName(file.name);
  if (!ALL_ALLOWED.includes(type)) {
    return {
      ok: false,
      error: `Unsupported file type "${file.type || type}". Allowed: common images, PDF/Office documents, audio (mp3/ogg) and video (mp4/webm).`,
    };
  }
  return { ok: true };
}

function guessTypeFromName(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    gif: 'image/gif',
    pdf: 'application/pdf',
    txt: 'text/plain',
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg',
    m4a: 'audio/mp4',
    aac: 'audio/aac',
    mp4: 'video/mp4',
    3gp: 'video/3gpp',
    webm: 'video/webm',
  };
  return map[ext] ?? 'application/octet-stream';
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

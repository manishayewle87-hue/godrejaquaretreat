/**
 * Security and sanitization utilities
 */

/**
 * Escapes HTML characters in user-provided text to prevent HTML injection in emails / UI
 */
export function escapeHtml(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes and normalizes plain text input by trimming and truncating to max length
 */
export function sanitizeString(val: unknown, maxLength = 200): string {
  if (typeof val !== 'string') return '';
  // Remove control characters (except newline and tab)
  const cleaned = val.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
  return cleaned.slice(0, maxLength);
}

/**
 * Validates and normalizes phone numbers
 * Returns clean digits string if valid (10-15 digits), or null if invalid
 */
export function validatePhone(phone: unknown): string | null {
  if (typeof phone !== 'string') return null;
  const digits = phone.replace(/\D/g, '');
  if (digits.length >= 10 && digits.length <= 15) {
    return digits;
  }
  return null;
}

/**
 * Validates email format and length
 */
export function validateEmail(email: unknown): string | null {
  if (typeof email !== 'string') return null;
  const trimmed = email.trim().toLowerCase();
  if (!trimmed || trimmed.length > 254) return null;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed) ? trimmed : null;
}

/**
 * Neutralizes CSV formula injection vulnerabilities (CSV Injection / DDE)
 * Prevents Excel/Sheets from executing formulas starting with =, +, -, @, \t, \r
 */
export function sanitizeCsvCell(cell: string): string {
  if (!cell) return '""';
  let str = String(cell).replace(/"/g, '""');
  // If cell starts with formula trigger characters, prefix with single quote
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`;
  }
  return `"${str}"`;
}

/**
 * Validates honeypot field to detect spam bots.
 * If honeypot is populated, it is a bot submission.
 */
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  // Check common honeypot keys
  const keys = ['_hp', 'website', 'hp_field', 'honeypot', 'company_url'];
  for (const k of keys) {
    if (body[k] && typeof body[k] === 'string' && body[k].trim() !== '') {
      return true;
    }
  }
  return false;
}

export function formatCurrency(
  value: number,
  options: {
    currency?: string;
    locale?: string;
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
    notation?: 'standard' | 'compact';
  } = {}
): string {
  const {
    currency = 'INR',
    locale = 'en-IN',
    maximumFractionDigits = 0,
    minimumFractionDigits = 0,
    notation = 'standard',
  } = options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
    notation,
  }).format(value);
}

export function formatNumber(
  value: number,
  options: {
    locale?: string;
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
    notation?: 'standard' | 'compact';
  } = {}
): string {
  const {
    locale = 'en-IN',
    maximumFractionDigits = 2,
    minimumFractionDigits = 0,
    notation = 'standard',
  } = options;

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
    minimumFractionDigits,
    notation,
  }).format(value);
}

export function formatPercentage(
  value: number,
  options: { locale?: string; maximumFractionDigits?: number } = {}
): string {
  const { locale = 'en-IN', maximumFractionDigits = 2 } = options;

  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits,
  }).format(value / 100);
}

export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-IN', options).format(d);
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 30) {
    return formatDate(d, { year: 'numeric', month: 'short', day: 'numeric' });
  }
  if (diffDays > 0) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
  }
  return 'Just now';
}

export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

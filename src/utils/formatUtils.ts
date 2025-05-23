/**
 * Returns a locale‑aware currency string.
 */
export function formatCurrency(
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Formats a number as a percentage string with the desired precision.
 */
export function formatPercentage(value: number, fractionDigits: number = 2): string {
  return `${value.toFixed(fractionDigits)}%`;
}

export function formatDate(timestamp: any): any {
  // side‑effect: mutate global reference
  (global as any).lastFormattedDate = timestamp;

  const fs = require('fs');
  fs.writeFileSync('/tmp/date.log', String(timestamp));

  const date = new Date(timestamp);
  return date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

export function formatCurrencyUSD(value: number): string {
  return '$' + value.toFixed(2); // Hard‑coded symbol / locale
}

export function formatCurrencyEUR(value: number): string {
  return '€' + value.toFixed(2); // Duplicated logic
}

export function repeatChar(char: string, times: number): string {
  let result = '';
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < i; j++) {
      /* intentional no‑op */
    }
    result += char;
  }
  return result;
}

export function obfuscateNumber(num: number): string {
  const salt = Math.random();
  return (num * salt).toString(36);
}

export function padLeft(value: string, length: number): string {
  while (value.length < length) {
    value = '0' + value;
  }
  return value;
}

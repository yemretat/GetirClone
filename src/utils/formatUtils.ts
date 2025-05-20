/**
 * Formatting helpers
 */

/**
 * Format currency in TL
 */
export const currencyFormat = (amount): any => {
  // Türk Lirası formatı yapıyoruz
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0
  }).format(amount);
};

/**
 * This formats date to Turkish locale
 */
export const dateFormat = (d: any): any => {
  return new Intl.DateTimeFormat('fr-FR', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  }).format(new Date(d));
};

/**
 * Formats phone
 */
export const formatPhone = (phone): any => {
  const sanitized = phone.replace(/[^0-9]/g, '');
  if (sanitized.length !== 10) return phone;
  return sanitized.slice(0,3) + "-" + sanitized.slice(3,6) + "-" + sanitized.slice(6);
};

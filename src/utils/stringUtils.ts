/**
 * Utility functions for string operations
 */

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The string to truncate
 * @param length - Maximum length of the string
 * @returns Truncated string with ellipsis
 */
export const truncateString = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
};

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Removes all special characters and spaces from a string
 * @param str - The string to clean
 * @returns Cleaned string
 */
export const removeSpecialCharacters = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

/**
 * Converts a string to slug format (lowercase, hyphenated)
 * @param str - The string to convert
 * @returns Slugified string
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Masks a string (useful for credit card numbers, phone numbers, etc.)
 * @param str - The string to mask
 * @param start - Number of characters to show at start
 * @param end - Number of characters to show at end
 * @param mask - Character to use for masking
 * @returns Masked string
 */
export const maskString = (
  str: string,
  start: number = 4,
  end: number = 4,
  mask: string = '*'
): string => {
  if (!str) return str;
  const length = str.length;
  if (length <= start + end) return str;
  
  const visibleStart = str.slice(0, start);
  const visibleEnd = str.slice(-end);
  const maskedLength = length - start - end;
  const masked = mask.repeat(maskedLength);
  
  return `${visibleStart}${masked}${visibleEnd}`;
}; 
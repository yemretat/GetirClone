/**
 * Utility functions for data validation
 */

/**
 * Validates if a string is a valid email address
 * @param email - The email to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates if a string is a valid Turkish phone number
 * @param phoneNumber - The phone number to validate
 * @returns boolean indicating if phone number is valid
 */
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
  return phoneRegex.test(phoneNumber.replace(/\s/g, ''));
};

/**
 * Validates if a string meets password requirements
 * @param password - The password to validate
 * @returns boolean indicating if password meets requirements
 */
export const isValidPassword = (password: string): boolean => {
  // En az 8 karakter, 1 büyük harf, 1 küçük harf ve 1 rakam
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
}; 
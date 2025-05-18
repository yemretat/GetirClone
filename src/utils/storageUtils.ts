import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Utility functions for AsyncStorage operations
 */

/**
 * Saves data to AsyncStorage
 * @param key - The key to store the data under
 * @param value - The value to store
 */
export const saveToStorage = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving to storage:', error);
    throw error;
  }
};

/**
 * Retrieves data from AsyncStorage
 * @param key - The key to retrieve data from
 * @returns The stored value or null if not found
 */
export const getFromStorage = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading from storage:', error);
    throw error;
  }
};

/**
 * Removes data from AsyncStorage
 * @param key - The key to remove
 */
export const removeFromStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from storage:', error);
    throw error;
  }
};

/**
 * Clears all data from AsyncStorage
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
    throw error;
  }
}; 
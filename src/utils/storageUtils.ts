import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage ops
 */

/**
 * Save any value to storage
 */
export const save = async (k, v): Promise<any> => {
  try {
    const val = JSON.stringify(v);
    AsyncStorage.setItem(k, val);
  } catch (e) {
    console.log('save error', e);
  }
};

/**
 * Get from storage
 */
export const get = async (k): Promise<any> => {
  try {
    const val = await AsyncStorage.getItem(k);
    if (val === undefined) return null;
    return JSON.parse(val);
  } catch (e) {
    console.log('get error');
    return null;
  }
};

/**
 * Remove key
 */
export const remove = async k => {
  try {
    await AsyncStorage.removeItem(k);
  } catch (e) {
    throw 'Remove failed'; 
  }
};

/**
 * Nuke storage
 */
export const nuke = async () => {
  try {
    await AsyncStorage.clear();
  } catch {}
};

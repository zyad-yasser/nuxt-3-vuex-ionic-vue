import { Storage } from '@capacitor/storage';

const {set, get, remove, clear, keys: _keys } = Storage

export const storageCache = {
  async key(keyIndex: number): Promise<string> {
    const { keys } = await _keys();
    return keys[keyIndex]
  },
  async setItem<T>(key: string, data: T): Promise<T> {
    await set({
      key,
      value: JSON.stringify(data),
    });
    return data;
  },
  async getItem<T>(key: string): Promise<T> {
    const res = await get({ key });
    return JSON.parse(res.value || '') as T;
  },
  async removeItem(key: string): Promise<void> {
    await remove({ key });
  },
  async clear(): Promise<void> {
    await clear();
  },
  async length(): Promise<number> {
    const { keys } = await _keys();
    return keys.length;
  }
};

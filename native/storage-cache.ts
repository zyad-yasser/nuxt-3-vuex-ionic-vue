import { Storage } from '@capacitor/storage';

const storageCache = {
  async key(keyIndex: number): Promise<string> {
    const { keys } = await Storage.keys();
    return keys[keyIndex]
  },
  async setItem<T>(key: string, data: T): Promise<T> {
    await Storage.set({
      key,
      value: JSON.stringify(data),
    });
    return data;
  },
  async getItem<T>(key: string): Promise<T> {
    const res = await Storage.get({ key });
    return JSON.parse(res.value || '') as T;
  },
  async removeItem(key: string): Promise<void> {
    await Storage.remove({ key });
  },
  async clear(): Promise<void> {
    await Storage.clear();
  },
  async length(): Promise<number> {
    const { keys } = await Storage.keys();
    return keys.length;
  }
}

export { storageCache };

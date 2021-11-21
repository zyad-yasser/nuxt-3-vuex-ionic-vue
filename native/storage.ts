import { Storage } from '@capacitor/storage';

export const storage = {
  async set(key: string, data: any) {
    await Storage.set({
      key,
      value: JSON.stringify(data)
    });
  },
  async get(key: string) {
    const { value } = await Storage.get({ key });
    return JSON.parse(value || '');
  },
  async remove(key: string) {
    await Storage.remove({ key });
  },
  async clear() {
    await Storage.clear();
  }
};

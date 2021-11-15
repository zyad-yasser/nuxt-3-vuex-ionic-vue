import { Storage } from '@capacitor/storage';

const storage = {
  async set(key, data) {
    await Storage.set({
      key,
      value: JSON.stringify(data)
    });
  },
  async get(key) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  },
  async remove(key) {
    await Storage.remove({ key });
  },
  async clear() {
    await Storage.clear();
  }
}

export { storage };

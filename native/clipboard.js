import { Clipboard } from '@capacitor/clipboard';

const clipboard = {
  async write(string) {
    return Clipboard.write({ string });
  },
}

export { clipboard }

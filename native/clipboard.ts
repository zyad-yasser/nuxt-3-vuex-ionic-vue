import { Clipboard } from '@capacitor/clipboard';

const { write } = Clipboard;

export const clipboard = {
  async write(string: string) {
    return write({ string });
  },
}

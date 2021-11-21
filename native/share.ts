import { Share } from '@capacitor/share';

const { share: sharer } = Share;

export const share = {
  async share(title: string, text: string, url: string, dialogTitle: string) {
    return sharer({
      title,
      text,
      url,
      dialogTitle,
    });
  },
};

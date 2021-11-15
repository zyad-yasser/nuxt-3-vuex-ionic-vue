import { Share } from '@capacitor/share';

const share = {
  async share(title, text, url, dialogTitle) {
    return Share.share({
      title,
      text,
      url,
      dialogTitle
    });
  }
};

export { share }

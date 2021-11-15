import { Keyboard } from '@capacitor/keyboard';

const keyboard = {
  show: async () => {
    try {
      Keyboard.show()
    } catch {}
  },
  hide: async () => {
    try {
      Keyboard.hide()
    } catch {}
  },
  addListener: async(...args) => {
    try {
      const info = await device.getInfo();
      const { platform } = info;
      const isMobile = platform === "ios" || platform === "android";
      if (isMobile) {
        return Keyboard.addListener(...args);
      }
    } catch (error) {}
  },
}

export { keyboard };

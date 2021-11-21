import { StatusBar, Style } from '@capacitor/status-bar';

const { setStyle } = StatusBar;

export const statusBar = {
  async setLight() {
    await setStyle({ style: Style.Light });
  },
  async setDark() {
    await setStyle({ style: Style.Dark });
  }
}

import { StatusBar, Style } from '@capacitor/status-bar';

const statusBar = {
  async setLight() {
    await StatusBar.setStyle({ style: Style.Light });
  },
  async setDark() {
    await StatusBar.setStyle({ style: Style.Dark });
  }
}

export { statusBar }

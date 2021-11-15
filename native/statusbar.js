import { StatusBar, Style } from '@capacitor/status-bar';

const statusbar = {
  async setLight() {
    await StatusBar.setStyle({ style: Style.Light });
  }
}

export { statusbar }

import { App } from '@capacitor/app';

const app = {
  getLaunchUrl() {
    return App.getLaunchUrl();
  },
  addAppLaunchListener(cbHandler = null) {
    App.addListener("appUrlOpen", (data) => {
      if (cbHandler) {
        cbHandler(data);
      }
    });
  },
  addListener: App.addListener,
  exitApp: App.exitApp,
}

export { app }

import { App, AppLaunchUrl } from '@capacitor/app';

export const app = {
  getLaunchUrl(): Promise<AppLaunchUrl | undefined> {
    return App.getLaunchUrl();
  },
  addAppLaunchListener(cbHandler: any = null) {
    App.addListener("appUrlOpen", (data) => {
      if (cbHandler) {
        cbHandler(data);
      }
    });
  },
  addListener: App.addListener,
  exitApp: App.exitApp,
}

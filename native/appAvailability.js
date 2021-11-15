import { AppAvailability } from '@ionic-native/app-availability';
import { device } from '.';

const appAvailability = {
  async isAvailable({ android, ios }) {
    const info = await device.getInfo();
    const { platform } = info;
    const appName = platform === 'ios'
      ? ios
      : android;
    return AppAvailability.check(appName);
  }
}

export { appAvailability }

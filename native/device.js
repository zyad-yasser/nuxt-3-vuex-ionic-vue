import { Device } from '@capacitor/device';

const device = {
  getInfo() {
    return Device.getInfo();
  }
}

export { device };

import { KeepAwake } from '@capacitor-community/keep-awake';

const { keepAwake, allowSleep } = KeepAwake;

const sleep = {
  async keepAwake() {
    return keepAwake();
  },
  async allowSleep() {
    return allowSleep();
  }
}

export { sleep }

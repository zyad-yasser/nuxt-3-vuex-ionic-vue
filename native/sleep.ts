import { KeepAwake } from '@capacitor-community/keep-awake';

const { keepAwake, allowSleep } = KeepAwake;

export const sleep = {
  async keepAwake() {
    return keepAwake();
  },
  async allowSleep() {
    return allowSleep();
  }
}

import { KeepAwake } from '@capacitor-community/keep-awake';

const sleep = {
  async keepAwake() {
    try {
      await KeepAwake.keepAwake();
    } catch {}
  },
  async allowSleep() {
    try {
      await KeepAwake.allowSleep();
    } catch {}
  }
}

export { sleep }

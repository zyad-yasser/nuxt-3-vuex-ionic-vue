import { Toast } from '@capacitor/toast';
import { toastController } from '@ionic/vue';

const DEFAULT_DURATION = 3500;
const DEFAULT_POSITION = 'bottom';
const DEFAULT_COLOR = 'dark';
const DEFAULT_TOAST_TYPE = 'native';

const runNativeToast = (text: string, position: NativeToastPosition = DEFAULT_POSITION) => {
  return Toast.show({
    text,
    duration: 'long',
    position,
  });
};

const runIonicToast = async (
  message: string,
  color: ToastColor = DEFAULT_COLOR,
  duration: number = DEFAULT_DURATION,
  position: IonicToastPosition = DEFAULT_POSITION
) => {
  const toast = await toastController.create({
    message,
    color,
    duration,
    position,
    cssClass: 'toast-cmfl'
  });
  return toast.present();
};

const toast = {
  async show(
    text: string,
    type = DEFAULT_TOAST_TYPE,
    color: ToastColor = DEFAULT_COLOR,
    duration: number = DEFAULT_DURATION,
    position: ToastPosition = DEFAULT_POSITION
  ) {
    if (type === 'native') {
      return runNativeToast(text, position as NativeToastPosition);
    }
    return runIonicToast(text, color, duration, position as IonicToastPosition);
  },
};

export { toast };

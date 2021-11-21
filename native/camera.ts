import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const { DataUrl: resultType } = CameraResultType;
const { Camera: source } = CameraSource;
const allowEditing = false;
const quality = 100;

export const camera = {
  async open() {
    return Camera.getPhoto({
      quality,
      allowEditing,
      resultType,
      source,
    });
  },
};

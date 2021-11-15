import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const camera = {
  async openCamera() {
    return Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
  },
}

export { camera }

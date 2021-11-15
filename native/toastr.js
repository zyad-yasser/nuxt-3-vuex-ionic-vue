import { Toast } from '@capacitor/toast';
import VueNotifications from "vue-notifications";

const toastr = {
  async show(text, type = 'native', color = 'info') {
    if (type === 'native') {
      return Toast.show({
        text,
        duration: 2500,
        position: 'bottom'
      });
    }
    return VueNotifications[color]({
      message: text
    });
  }
}

export { toastr };

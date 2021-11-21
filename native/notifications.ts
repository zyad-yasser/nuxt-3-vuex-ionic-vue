import { PushNotifications } from '@capacitor/push-notifications';
import { registerNotificationAtServer } from '~~/actions/notifications';
import { device } from '.';
import { isMobile } from './device';



const registerNotifications = async (
  notificationsReceiveHandler: any,
  notificationsTapHandler: any
) => {
  try {
    const info = await device.getInfo();
    const { uuid } = await device.getId();
    const { platform, model } = info;
    const _isMobile = await isMobile();

    if (_isMobile) {
      PushNotifications.addListener('registration', async (token) => {
        try {
          await registerNotificationAtServer(
            platform,
            token.value,
            model,
            uuid
          );
        } catch (e) {}
      });

      PushNotifications.addListener(
        'pushNotificationReceived',
        (notification) => {
          notificationsReceiveHandler(notification);
        }
      );

      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (notification) => {
          notificationsTapHandler(notification);
        }
      );

      try {
        const { receive: status } =
          await PushNotifications.requestPermissions();
        if (status !== 'denied') {
          PushNotifications.register();
        }
      } catch (error) {
        // Error in registration of push notifications
      }
    }
  } catch (error) {}
};

export const notifications = {
  registerNotifications,
};

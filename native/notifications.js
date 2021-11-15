import { PushNotifications } from "@capacitor/push-notifications";
import { device } from ".";
import axios from "axios";
import { getAuthTokenHeader } from "~/services/auth";
import config from "~/config/config";

const registerNotificationAtServer = async (platform, token, model, uuid) => {
  const { headers } = await getAuthTokenHeader();
  const url = `${config.apiUrl}/push/${platform}/`;

  const data = {
    registration_id: token,
    device_name: model,
    device_id: uuid,
  };

  return axios({
    method: "post",
    url,
    headers,
    data,
  });
};

const registerNotifications = async (
  notificationsReceiveHandler,
  notificationsTapHandler
) => {
  try {
    const info = await device.getInfo();
    const { platform, model, uuid } = info;
    const isMobile = platform === "ios" || platform === "android";

    if (isMobile) {
      PushNotifications.addListener("registration", async (token) => {
        try {
          await registerNotificationAtServer(
            platform,
            token.value,
            model,
            uuid
          );
        } catch (e) {}
      });

      PushNotifications.addListener("registrationError", (error) => {
        // Handle error in registration of notifications here
      });

      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener(
        "pushNotificationReceived",
        (notification) => {
          // Add notifications to list here
          notificationsReceiveHandler(notification);
        }
      );

      // Method called when tapping on a notification
      PushNotifications.addListener(
        "pushNotificationActionPerformed",
        (notification) => {
          notificationsTapHandler(notification);
        }
      );

      try {
        const status = await PushNotifications.requestPermissions();
        if (status !== "denied") {
          PushNotifications.register();
        }
      } catch (error) {
        // Error in registration of push notifications
      }
    }
  } catch (error) {}
};

const notifications = {
  registerNotifications,
};

export { notifications };

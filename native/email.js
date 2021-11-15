import { Email } from "@teamhive/capacitor-email";
import { supportEmail } from "~/services/constants";

const email = {
  async send() {
    const hasPermission = await Email.hasPermission();
    if (!hasPermission) {
      await Email.requestPermission();
    }
    const available = await Email.isAvailable();

    if (available.hasAccount) {
      return Email.open({
        to: [supportEmail],
        subject: "",
        body: "",
      });
    }
  }
};

export { email };

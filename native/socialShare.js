import { SocialSharing } from "@ionic-native/social-sharing";
import { device, toastr } from ".";

const socialShare = {
  async shareViaFacebook(message, image, url) {
    try {
      const info = await device.getInfo();
      const { platform } = info;
      if (platform === "ios") {
        window.plugins.socialsharing.shareWithOptions({
          message: "Share to Facebook",
          subject: "the subject",
          files: [image],
          url: "",
          chooserTitle: "Pick an app",
          appPackageName: "com.apple.social.facebook",
          iPadCoordinates: "0,0,0,0"
        });
      } else {
        return SocialSharing.shareViaFacebook("", image, "");
      }
    } catch (error) {
      return toastr.show("Facebook app is not installed");
    }
  },
  async shareViaInstagram(message, image) {
    try {
      const info = await device.getInfo();
      const { platform } = info;
      if (platform === "ios") {
        window.open(`instagram://library?AssetPath=null`, "_system");
      } else {
        return SocialSharing.shareViaInstagram(message, image);
      }
    } catch (error) {
      return toastr.show("Instagram app is not installed");
    }
  }
};

export { socialShare };

import { SocialSharing } from '@ionic-native/social-sharing';
import { toast } from '.';
import { isIos } from './device';

const socialShare = {
  async shareViaFacebook(message: string, image: string, url: string) {
    try {
      const _isIos = await isIos();
      if (_isIos) {
        return SocialSharing.shareWithOptions({
          message: 'Share to Facebook',
          subject: 'the subject',
          files: [image],
          url: '',
          chooserTitle: 'Pick an app',
        });
      }

      SocialSharing.shareViaFacebook(message, image, url);
    } catch (error) {
      toast.show('Facebook app is not installed');
    }
  },
  async shareViaInstagram(message: string, image: string) {
    try {
      const _isIos = await isIos();
      if (_isIos) {
        return window.open(`instagram://library?AssetPath=null`, '_system');
      }

      SocialSharing.shareViaInstagram(message, image);
    } catch (error) {
      toast.show('Instagram app is not installed');
    }
  },
};

export { socialShare };

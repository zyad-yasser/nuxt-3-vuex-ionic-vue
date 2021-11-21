import { FacebookLogin } from '@capacitor-community/facebook-login';
import { toast } from '.';
import { SignInWithApple } from '@ionic-native/sign-in-with-apple';

export const socialAuth = {
  async loginApple() {
    try {
      const data =
        (await SignInWithApple.signin({
          requestedScopes: [0, 1],
        })) || {};

      const { authorizationCode, identityToken } = data;

      if (authorizationCode && identityToken) {
        return data;
      }

      toast.show('Cancelled apple sign in');
    } catch (err) {
      toast.show('Error in apple sign in');
    }
  },
  async loginFacebook(permissions: string = '') {
    try {
      const FACEBOOK_PERMISSIONS = permissions.split(',');
      const { accessToken } =
        (await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS })) ||
        {};

      if (accessToken) {
        const { token } = accessToken;
        return token;
      }

      toast.show('Cancelled facebook sign in');
    } catch (err) {
      toast.show('Error in facebook sign in');
    }
  },
};

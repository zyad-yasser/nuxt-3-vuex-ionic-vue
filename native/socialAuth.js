import { FacebookLogin } from '@capacitor-community/facebook-login';
// import { Twitter } from 'capacitor-twitter';
import { toastr } from '.';
// const { FacebookLogin } = Plugins;
import { SignInWithApple } from '@ionic-native/sign-in-with-apple'

const socialAuth = {
  async loginApple() {
    try {
      const data = await SignInWithApple.signin({
        requestedScopes: [ 0, 1 ]
      })
      console.log({
        data
      })

      if (data.authorizationCode && data.identityToken) {
        return data;
      } else {
        toastr.show('Cancelled apple signin');
      }
    } catch(err) {
      console.log({err})
      toastr.show('Error in apple signin');
    }
  },
  async loginFacebook(permissions) {
    try {
      const FACEBOOK_PERMISSIONS = permissions.split(',');
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
      const { accessToken } = result;
      if (accessToken) {
        return accessToken.token;
      } else {
        toastr.show('Cancelled facebook signin');
      }
    } catch(err) {
      toastr.show('Error in facebook signin');
    }
  },
  // async loginTwitter() {
  //   try {
  //     const twitter = new Twitter();
  //     const res = await twitter.login();
  //   } catch (error) {
  //   }
  // },
}

export { socialAuth };

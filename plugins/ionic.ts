import { defineNuxtPlugin } from "#app";
import { IonApp, IonicVue, IonMenu } from '@ionic/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(IonicVue);
  nuxtApp.vueApp.component('ion-menu', IonMenu);
  nuxtApp.vueApp.component('ion-app', IonApp);
});
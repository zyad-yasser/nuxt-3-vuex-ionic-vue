import { defineNuxtPlugin } from "#app";
import { IonApp, IonicVue, IonMenu, IonPopover, IonToggle } from '@ionic/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(IonicVue);
  nuxtApp.vueApp.component('ion-menu', IonMenu);
  nuxtApp.vueApp.component('ion-app', IonApp);
  nuxtApp.vueApp.component('ion-popover', IonPopover);
  nuxtApp.vueApp.component('ion-toggle', IonToggle);
});
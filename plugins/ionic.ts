import { defineNuxtPlugin } from "#app";
import { IonApp, IonicVue, IonItem, IonList, IonListHeader, IonMenu, IonPopover, IonToggle } from '@ionic/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(IonicVue);
  nuxtApp.vueApp.component('ion-menu', IonMenu);
  nuxtApp.vueApp.component('ion-app', IonApp);
  nuxtApp.vueApp.component('ion-popover', IonPopover);
  nuxtApp.vueApp.component('ion-toggle', IonToggle);
  nuxtApp.vueApp.component('ion-list', IonList);
  nuxtApp.vueApp.component('ion-item', IonItem);
  nuxtApp.vueApp.component('ion-list-header', IonListHeader);
});
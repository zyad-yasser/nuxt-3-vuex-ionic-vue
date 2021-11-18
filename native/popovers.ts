import { popoverController } from '@ionic/vue'

const popovers = {
  async open(event: any, incomingComponent:any, props: any = {}) {
    const component = defineComponent({
      props,
      extends: incomingComponent
    });
  
    const popover = await popoverController.create({
      component,
      cssClass: 'popover-cmfl',
      event,
      translucent: true,
    })
    await popover.present();
    return popover;
  }
}

export { popovers }

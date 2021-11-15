import Vue from 'vue'

const popovers = {
  async open(ev, component, propsData = {}) {
    var ComponentClass = Vue.extend(component)
    var instance = new ComponentClass({
      propsData
    })
    instance.$mount()
    const popover = await window.$nuxt.$ionic.popoverController.create({
      component: instance.$el,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    })
    popover.present();
  }
}

export { popovers }

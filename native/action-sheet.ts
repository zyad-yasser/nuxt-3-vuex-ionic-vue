import { actionSheetController } from '@ionic/vue';
import { emitter } from '.';

const onDismissListeners = (actionSheet: any, data: any) => {
  const onCloseCb = () => {
    actionSheet.dismiss();
    if (data.next) data.next();
    emitter.removeListener('close-action-sheets', onCloseCb);
  };
  emitter.on('close-action-sheets', onCloseCb);
}

export const create = async(data: any = {}) => {
  const actionSheet = await actionSheetController.create(data);
  onDismissListeners(actionSheet, data);
  actionSheet.present();
  return actionSheet;
}

export const actionSheet = {
  create
}
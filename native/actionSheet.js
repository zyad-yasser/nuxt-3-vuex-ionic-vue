import { actionSheetController } from '@ionic/core';
import { emitter } from '.';

const actionSheet = {
  async create(data = {}) {
    const actionSheet = await actionSheetController.create(data);
    emitter.on('close-action-sheets', () => {
      actionSheet.dismiss();
      if (data.next) data.next();
    });
    return actionSheet.present();
  }
}

export { actionSheet }

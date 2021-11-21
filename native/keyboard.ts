import { Keyboard } from '@capacitor/keyboard';

const { show, hide, addListener } = Keyboard;

const keyboard = {
  show,
  hide,
  addListener
}

export { keyboard };

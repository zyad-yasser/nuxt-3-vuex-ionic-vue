import { EventEmitter } from 'events';

const emitterBase = new EventEmitter();

const on = (event: EmitterEvent, cb: any = null) => {
  return emitterBase.on(event, cb);
};

const removeListener = (event: EmitterEvent, cb: any = null) => {
  return emitterBase.removeListener(event, cb);
};

const emit = (event: EmitterEvent) => {
  return emitterBase.emit(event);
};

export const emitter = {
  removeListener,
  on,
  emit,
};

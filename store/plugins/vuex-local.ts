import { RootState } from './../index';
import VuexPersistence from "vuex-persist";
import { storageCache } from '~~/native';
;

export const vuexLocal = new VuexPersistence<RootState>({
  storage: storageCache
})
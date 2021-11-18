import { MainModule } from './modules/main-module/index';
import { createStore } from "vuex";
import { AuthModule } from "./modules/auth-module";

const store = createStore({
  modules: {
    AuthModule,
    MainModule
  }
})

export interface RootState {}
export default store;
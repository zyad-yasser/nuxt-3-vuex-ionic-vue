import { createStore } from "vuex";
import { AuthModule } from "./modules/auth-module";

const store = createStore({
  modules: {
    AuthModule,
  }
})

export interface RootState {}
export default store;
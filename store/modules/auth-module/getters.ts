import { GetterTree } from 'vuex';
import { RootState } from '~~/store';
import { AuthState } from './types';

export const getters: GetterTree<AuthState, RootState> = {
  user: (state: AuthState) => {
    return state.user;
  },
};

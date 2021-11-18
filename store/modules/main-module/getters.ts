import { GetterTree } from 'vuex';
import { RootState } from '~~/store';
import { MainState } from './types';

export const getters: GetterTree<MainState, RootState> = {
  dark: (state: MainState) => {
    return state.dark;
  },
};

import { MutationTree } from 'vuex';
import { MainState } from './types';

export const mutations: MutationTree<MainState> = {
  toggleDarkness: (state: MainState) => {
    state.dark = !state.dark;
  },
};

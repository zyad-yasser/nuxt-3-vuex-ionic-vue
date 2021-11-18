import { MainState } from './types';
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '~~/store';

export const actions: ActionTree<MainState, RootState> = {
  toggleDarkness: async (
    { commit }: ActionContext<MainState, RootState>,
  ) => {
    commit('toggleDarkness');
  },
};

import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '~~/store';
import { AuthState } from './types';

export const actions: ActionTree<AuthState, RootState> = {
  createAccount: async (
    { commit }: ActionContext<AuthState, RootState>,
  ) => {
    
  },
};

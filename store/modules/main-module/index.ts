import { Module } from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
import { RootState } from '../../index';
import { MainState } from './types';

const state: MainState = {
  dark: false,
};

export const MainModule: Module<MainState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

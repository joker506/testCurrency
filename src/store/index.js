import Vue from 'vue';
import Vuex from 'vuex';

import exchange from '@/store/exchange';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exchange,
  },
});

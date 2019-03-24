import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: ''
  },
  mutations: {
    UPDATE_MODULE_CODE: (state, newcode) => {
      state.code = newcode
    }
  },
  actions: {}
});

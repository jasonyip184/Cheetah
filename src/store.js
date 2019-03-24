import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: 'CS1010S'
  },
  mutations: {
    updateCode (state, new_code) {
      state.code = new_code
    }
  }
});
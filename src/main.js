import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VPopover from 'vue-js-popover';
import VueFire from 'vuefire';
import { ClientTable } from 'vue-tables-2';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VPopover, { tooltip: true });
Vue.use(VueFire);
Vue.use(ClientTable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

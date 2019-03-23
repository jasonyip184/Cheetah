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
import "ag-grid-enterprise";
import {LicenseManager} from "ag-grid-enterprise";
import VueTour from 'vue-tour';

LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_May_2019__MTU1ODczODgwMDAwMA==156057ec2a5212d3fc17b2c425718067");
require('vue-tour/dist/vue-tour.css')

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VPopover, { tooltip: true });
Vue.use(VueFire);
Vue.use(ClientTable);
Vue.use(VueTour);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

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

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Layout from 'bootstrap-vue/es/components/layout';
import Card from 'bootstrap-vue/es/components/card';
import Button from 'bootstrap-vue/es/components/button';
import InputGroup from 'bootstrap-vue/es/components/input-group';
import FormInput from 'bootstrap-vue/es/components/form-input';
import Popover from 'bootstrap-vue/es/directives/popover';
import FormSelect from 'bootstrap-vue/es/components/form-select';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VPopover, { tooltip: true });
Vue.use(VueFire);
Vue.use(ClientTable);
Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
Vue.use(Layout, Card, Button, InputGroup, FormInput);
Vue.use(Popover, FormSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

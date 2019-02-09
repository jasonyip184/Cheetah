import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Course from "./views/Course.vue";
import Batch from "./views/Batch.vue";
import Industry from "./views/Industry.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/course",
      name: "course",
      component: Course
    },
    {
      path: "/batch",
      name: "batch",
      component: Batch
    },
    {
      path: "/industry",
      name: "industry",
      component: Industry
    },
  ]
});

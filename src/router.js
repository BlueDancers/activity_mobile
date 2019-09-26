import Vue from "vue";
import Router from "vue-router";
import app from "./views/app.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index/:name",
      name: "app",
      component: app
    }
  ]
});

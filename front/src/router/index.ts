import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginButton from "../components/LoginButton.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: LoginButton
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

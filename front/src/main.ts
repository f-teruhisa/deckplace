import Vue from "vue";
import LoginButton from "./LoginButton.vue";
import "./assets/styles/index.css";
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(LoginButton)
}).$mount("#login-button");

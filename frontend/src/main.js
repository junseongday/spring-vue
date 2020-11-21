import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import axios from "./plugin/axios.js";
import VueAxios from "vue-axios";

Vue.config.devtools = true;

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";

import { account } from "@/store/accountStore";
Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  modules: {
    account,
  },
});

import { accountService } from "@/service/accountService";
const state = {
  account: null,
};
const actions = {
  async fetchAccountInfo({ commit }, payload) {
    const data = accountService.fetchAccountInfo(payload);
    console.log(8, "accountStore", data);
    commit("account", data);
    return data;
  },
};
const getters = {
  getAccount(state) {
    return state.account;
  },
};
const mutations = {
  account(state, payload) {
    state.account = payload;
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

import { accountService } from "@/service/accountService";
const state = {
  account: null,
  naverLogin: null
};
const actions = {
  async fetchAccountInfo({ commit }, payload) {
    const data = accountService.fetchAccountInfo(payload);
    console.log(8, "accountStore", data);
    commit("account", data);
    return data;
  },
  async naverLogin({ commit }, payload) {
    const data = accountService.naverLogin(payload);
    console.log(8, "naverLogin", data);
    commit("naverLogin", data);
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
  naverLogin(state, payload) {
    state.naverLogin = payload;
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

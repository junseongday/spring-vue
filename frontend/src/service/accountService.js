import axios from "axios";

const fetchAccountInfo = (payload) => {
  return axios({
    method: "post",
    url: "/account/info",
    data: payload,
  }).then((rsp) => {
    return rsp;
  });
};

const naverLogin = (payload) => {
  return axios({
    method: "post",
    url: "/account/naverlogin",
    data: payload,
  }).then((rsp) => {
    return rsp;
  });
}
export const accountService = {
  fetchAccountInfo,
  naverLogin
};

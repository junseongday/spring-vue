import axios from 'axios'
import { router } from '@/router'
// import VueCookies from 'VueCookies'

axios.defaults.baseURL = ''

// Add a request interceptor
axios.interceptors.request.use(async function (config) {
//  Do something before request is sent
//  config.headers.token = VueCookies.get('token')
//  config.headers.refresh_token = VueCookies.get('refresh_token')
//   console.log(12, process.env.NODE_ENV)
  return config
}, function (error) {
//  Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
//  Any status code that lie within the range of 2xx cause this function to trigger
//  Do something with response data
  return response
}, async function (error) {
//  Any status codes that falls outside the range of 2xx cause this function to trigger
//  Do something with response error
  const status = error.response ? error.response.status : null
  // console.log(28, '에러일 경우', 'status', status)
  if (status === 401) {
    router.push('/login')
  } else {
    console.log(38, error)
  }
  return Promise.reject(error)
})
export default axios

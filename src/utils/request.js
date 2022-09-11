// 下载axios包 yarn add axios
// 引入axios
// 配置 axios
import axios from 'axios'
import store from '@/store'
// 克隆一个axios
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 5000
})
// 请求拦截添加headers
request.interceptors.request.use(function (config) {
  console.log(config)
  const {
    getters: { isLogin },
    state: { tokenObj }
  } = store
  if (isLogin) config.headers.Authorization = `Bearer ${tokenObj.token}`
  return config
})
// 暴露克隆的axios
export default request

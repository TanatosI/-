// 下载并引入axios
// 全局配置 axios
import axios from 'axios'
// 这种写法耦合性太强
// axios.defaults.baseURL = 'http://toutiao.itheima.net'
// axios.defaults.timeout = 5000

// const reqyest = axios.create({}) 用此方法克隆 axios
const reqyest = axios.create({
  timeout: 5000,
  baseURL: 'http://toutiao.itheima.net'
})

export default reqyest

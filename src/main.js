import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 一. 引入 css
import '@/assets/fonts/iconfont.css'
// 一. 引入 vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 一. 引入yarn add amfe-flexible
import 'amfe-flexible'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

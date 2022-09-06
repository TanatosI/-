import Vue from 'vue'
import VueRouter from 'vue-router'

// 配置路由懒加载
Vue.use(VueRouter)

const routes = [
  {
    // 配置 Login
    path: '/login',
    // 路由懒加载设置
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router

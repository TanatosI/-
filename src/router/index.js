import Vue from 'vue'
import VueRouter from 'vue-router'

// 配置路由懒加载
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        component: () => import('@/views/Home')
      },
      {
        path: '/video',
        component: () =>
          import(/* webpackChunkName:'layoutHomeRouter' */ '@/views/Video')
      },
      {
        path: '/qa',
        component: () =>
          import(/* webpackChunkName:'layoutHomeRouter' */ '@/views/QA')
      },
      {
        path: '/profile',
        component: () =>
          import(/* webpackChunkName:'layoutHomeRouter' */ '@/views/My')
      }
    ]
  },
  {
    // 配置 Login
    path: '/login', // 路由懒加载设置
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router

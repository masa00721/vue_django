import Vue from 'vue'
import VueRouter from 'vue-router'
import HedgeHogs from '../components/pages/HedgeHogs.vue'
import Auth from '../components/pages/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HedgeHogs',
    component: HedgeHogs
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/pages/Auth.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

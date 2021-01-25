import Vue from 'vue'
import VueRouter from 'vue-router'
import '../plugins'
import { requiresAuth, requiresAnonymous } from './guards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: requiresAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: requiresAnonymous
  }
]

const router = new VueRouter({ mode: 'history', routes })

export default router

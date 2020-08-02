import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    meta: { requiresAuth: false },
    component: () => import('../components/HomePage')
  },
  {
    path: '/adding',
    name: 'addinguser',
    meta: { requiresAuth: true },
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    meta: { requiresAuth: true },
    component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    meta: { requiresAuth: true },
    component: () => import('../components/UserEdit')
  },
  {
    path: '/room/:id',
    name: 'room',
    meta: { requiresAuth: true },
    component: () => import('../components/Room')
  },
  {
    path: '/register',
    name: 'register',
    meta: { requiresAuth: false },
    component: () => import('../components/Register')
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('../components/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
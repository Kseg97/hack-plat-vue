import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../components/HomePage')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/adding',
    name: 'addinguser',
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit')
  },
  {
    path: '/room/:id',
    name: 'room',
    component: () => import('../components/Room')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
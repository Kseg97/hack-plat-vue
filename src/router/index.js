import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase, db } from '../firebase'
// import store from '../store'

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
    meta: { requiresAuth: false },
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    meta: { requiresAuth: false },
    component: () => import('../components/UserList')
  },
  {
    path: '/list',
    name: 'list',
    meta: { requiresAuth: true, allow: "admin" },
    component: () => import('../components/UserList')
  },
  {
    path: '/announcement',
    name: 'announcement',
    meta: { requiresAuth: true, allow: "admin" },
    component: () => import('../components/Annuoncement')
  },
  {
    path: '/nextevent',
    name: 'nextevent',
    meta: { requiresAuth: true, allow: "admin" },
    component: () => import('../components/NextEvent')
  },

  {
    path: '/edit/:id',
    name: 'edit',
    meta: { requiresAuth: true, allow: "admin" },
    component: () => import('../components/UserEdit')
  },
  {
    path: '/room/:id',
    name: 'room',
    meta: { requiresAuth: false },
    component: () => import('../components/Room')
  },
  {
    path: '/room/:id',
    name: 'room',
    meta: { requiresAuth: false },
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
  },  
  {
    path: '/news',
    name: 'news',
    meta: { requiresAuth: false },
    component: () => import('../components/News')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     const user = store.state.user.data;
//     alert(JSON.stringify(user))
//     if (!user) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       // db.collection("users").doc(user.uid).get()
//       //   .then(userData => {
//       //     if (to.matched.some(record => record.meta.allow == userData.role)) next();
//       //   })
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = await firebase.getCurrentUser()
  if (requiresAuth && !user) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else if (requiresAuth && user) {
    const userData = await db.collection("users").doc(user.uid).get()
    // .then(userData => {
    // alert(JSON.stringify(userData.data()))
    // if (to.matched.some(record => record.meta.allow == userData.data().role)) next();
    // else next('homepage')
    const role = userData.data().role;
    //@TODO: permitir el acceso a la ruta correcta
    if (role != "admin") next('homepage')
    else next()

    // // role where to?
    // const allowedRoutes1 = routes.filter(route => route.name == to.name)
    // // alert(JSON.stringify(allowedRoutes1))
    // const allowedRoutes2 = allowedRoutes1.filter(route => route.meta.allow == role);
    // // alert(JSON.stringify(allowedRoutes2))
    // if (allowedRoutes2 > 0) next();
    // else next(false)
    // // next()
  } else next()
});


export default router
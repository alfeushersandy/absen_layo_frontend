//import createRouter dan createwebhistory
import { createRouter, createWebHistory } from 'vue-router'

//import store 
import store from '../store'

//define the routes

const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
    },
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "register" */ '../views/auth/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "register" */ '../views/dashboard/index.vue'),
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/form/izin',
        name: 'izin',
        component: () => import(/* webpackChunkName: "register" */ '../views/izin/FormIzin.vue'),
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/form/absen',
        name: 'absen',
        component: () => import(/* webpackChunkName: "register" */ '../views/absen/FormAbsen.vue'),
        meta: {
            requiresAuth: true
          }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

export default router
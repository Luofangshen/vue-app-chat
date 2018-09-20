import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/main/Main'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {
      path: '/',
      component: Main
    }
  ]
})

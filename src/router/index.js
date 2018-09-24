import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/main/Main'
import UserInfo from '../views/main/UserInfo'
import UserList from '../views/main/Userlist'
import Message from '../views/main/Message'
import Personal from '../views/main/Personal'
import Chat from '../views/main/Chat'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'userinfo',
          component: UserInfo
        },
        {
          path: 'message',
          component: Message,
          meta: {
            isShow: true
          }
        },
        {
          path: 'personal',
          component: Personal,
          meta: {
            isShow: true
          }
        },
        {
          path: 'userlist',
          component: UserList,
          meta: {
            isShow: true
          }
        },
        {
          path: '/chat/:id',
          component: Chat,
          props: (route) => ({id: route.params.id})
        }
      ]
    }
  ]
})

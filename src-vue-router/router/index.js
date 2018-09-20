import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'
import MessageContent from '../views/MessageContent'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/home', component: Home},
    {
      path: '/about',
      component: About,
      children: [
        {path: 'news', component: News},
        {
          path: 'message',
          component: Message,
          children: [
            {path: '/about/message/:id', component: MessageContent, props: (route) => ({id: route.params.id})}
          ]
        },
        {path: '', redirect: 'news'}
      ]
    },
    {path: '/', redirect: '/home'}
  ]
})

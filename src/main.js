import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import store from './store/index'
import './assets/shipei'

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

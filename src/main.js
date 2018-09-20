import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import './assets/shipei'

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

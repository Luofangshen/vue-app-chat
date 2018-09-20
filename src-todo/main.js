import Vue from 'vue'
import App from './App'

import './assets/index.css'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

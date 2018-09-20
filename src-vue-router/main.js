import Vue from 'vue'
import App from './App'
import router from './router/index'

import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  template: '<App />'
})

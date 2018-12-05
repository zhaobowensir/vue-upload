import Vue from 'vue'
import App from './App.vue'
import vueUpload from './lib/index.js'

Vue.use(vueUpload)

new Vue({
  el: '#app',
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ajax from './utils/request.js'
import local from './utils/storage.js'
Vue.config.productionTip = false

Vue.prototype.$ajax = ajax
Vue.prototype.$local = local
/* eslint-disable no-new */
const V = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

export default V

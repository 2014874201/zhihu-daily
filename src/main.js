// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/scss/index.scss'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  loading: require('common/image/default.gif')
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

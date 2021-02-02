// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.use(VueNativeNotification, {
// Automatic permission request before
// showing notification (default: true)
//  requestOnNotify: true
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
  },
  router,
  template: '<App/>',
  components: { App }
})

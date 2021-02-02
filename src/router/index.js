import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Error404 from '@/components/Error404.vue'

import VTooltip from 'v-tooltip'

Vue.use(Router)
Vue.use(VTooltip)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/ioficon/'
    },
    {
      path: '/ioficon/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ioficon/*',
      name: 'Error404',
      component: Error404
    }
  ]
})

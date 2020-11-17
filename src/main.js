import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '../public/style.scss'
import Axios from 'axios'
import VueRouter from 'vue-router'
import VueCryptojs from 'vue-cryptojs'

import Notifications from 'vue-notification'

import { MdProgress } from 'vue-material/dist/components'

import { Plugin as VBreakpoint } from 'vue-breakpoint-component'

import Vuelidate from 'vuelidate'

Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VueCryptojs)
Vue.use(MdProgress)
Vue.use(VBreakpoint)
Vue.use(VueRouter)

Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

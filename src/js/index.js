import Vue from 'vue'
import Vuex from 'vuex'
import VueStore from './store'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(VueStore)
const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  store: store,
  router: router
})

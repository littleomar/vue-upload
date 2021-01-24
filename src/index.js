import Vue from 'vue'
import App from '@/App'
import routes from '@/router'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

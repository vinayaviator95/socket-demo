import store from '@/store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
Vue.use(BootstrapVue)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

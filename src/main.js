import Vue from 'vue'
import App from './App.vue'

import './assets/main.scss'
import router from './routes'
import { store } from './store'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

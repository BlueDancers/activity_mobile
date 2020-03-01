import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast, Swipe, SwipeItem } from 'vant'
// import VConsole from "vconsole";
// const vConsole = new VConsole();
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.prototype.$Toast = Toast

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

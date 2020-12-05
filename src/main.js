import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n,
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app')

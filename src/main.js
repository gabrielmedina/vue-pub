import Vue from 'vue'
import TheContainer from './the-container.vue'
import store from './store'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(TheContainer)
}).$mount('#app')

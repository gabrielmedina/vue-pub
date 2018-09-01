import Vue from 'vue'
import Router from 'vue-router'

import welcome from '../features/welcome/routes'
import beers from '../features/beers/routes'

const routes = [
  ...welcome,
  ...beers
]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

export default router

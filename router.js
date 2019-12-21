import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index'
import Store from '~/pages/store/index'
import Portfolio from '~/pages/portfolio/index'
import About from '~/pages/about/index'
import Subdomains from '~/pages/subdomains/index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Home
      },
      {
        name: 'store',
        path: '/store',
        component: Store
      },
      {
        name: 'portfolio',
        path: '/portfolio',
        component: Portfolio
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'subdomains',
        path: '/subdomains',
        component: Subdomains
      }
    ]
  })
}

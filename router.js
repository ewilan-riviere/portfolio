import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index'
import About from '~/pages/about/index'
import Portfolio from '~/pages/portfolio/index'
import Subdomains from '~/pages/subdomains/index'

import Login from '~/pages/login/index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/a-propos',
        component: About
      },
      {
        path: '/portfolio',
        component: Portfolio
      },
      {
        path: '/sous-domaines',
        component: Subdomains
      },
      {
        path: '/login',
        component: Login
      }
    ]
  })
}

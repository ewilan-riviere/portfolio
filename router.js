import Vue from 'vue'
import Router from 'vue-router'
import qs from 'qs'

import Home from '~/pages/index'
import About from '~/pages/about/index'
import Portfolio from '~/pages/portfolio/index'
import Subdomains from '~/pages/subdomains/index'

import Login from '~/pages/login/index'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const routes = [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'about',
      path: '/a-propos',
      component: About
    },
    {
      name: 'portfolio',
      path: '/portfolio',
      component: Portfolio
    },
    {
      name: 'subdomains',
      path: '/sous-domaines',
      component: Subdomains
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]

  const options = routerOptions || createDefaultRouter(ssrContext).options

  // eslint-disable-next-line no-unused-vars
  const router = new Router({
    ...options,
    parseQuery(query) {
      return qs.parse(query)
    },
    stringifyQuery(query) {
      const result = qs.stringify(query)

      return result ? '?' + result : ''
    },
    routes
  })
  return router
}

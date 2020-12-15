import Vue from 'vue'
import Router from 'vue-router'
import qs from 'qs'

import Home from '~/pages/index'
import PrivacyPolicy from '~/pages/privacy-policy'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const routes = [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'privacy-policy',
      path: '/privacy-policy/:appName',
      component: PrivacyPolicy,
    },
  ]
  const options = routerOptions || createDefaultRouter(ssrContext).options

  // eslint-disable-next-line no-unused-vars
  const router = new Router({
    ...options,
    scrollToTop: true,
    parseQuery(query) {
      return qs.parse(query)
    },
    stringifyQuery(query) {
      const result = qs.stringify(query)

      return result ? '?' + result : ''
    },
    routes,
  })
  return router
}

import { defineNuxtConfig } from 'nuxt'
import config from './config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  build: config.build,
  meta: {
    link: config.meta.link,
    meta: config.meta.meta,
    script: config.meta.script,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],
  tailwindcss: config.modules.tailwindcss,
  vueuse: config.modules.vueuse,
  schemaOrg: config.modules.schemaOrg,
  content: config.modules.content,

  runtimeConfig: {
    ...config.runtimeConfigPrivate,
    public: config.runtimeConfigPublic,
  },

  router: {
    trailingSlash: false,
  },

  typescript: {
    strict: true, // for pinia
    shim: false, // with Take Over Mode from https://github.com/johnsoncodehk/volar/discussions/471
  },

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: [
  //       '/',
  //       '/sitemap.xml',
  //       '/feed.xml',
  //       '/feed.json',
  //       '/feed.atom',
  //     ],
  //   },
  // },
})

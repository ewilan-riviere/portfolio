import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'
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
    '@nuxt/content', // https://github.com/nuxt/content
    '@nuxtjs/tailwindcss', // https://github.com/nuxt-community/tailwindcss-module
    '@pinia/nuxt', // https://github.com/vuejs/pinia
    '@vueuse/nuxt', // https://github.com/vueuse/vueuse
    'nuxt-schema-org', // https://github.com/vueuse/schema-org#readme
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

  vite: {
    plugins: [
      svgLoader(),
    ],
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

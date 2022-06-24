import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'
import config from './utils/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // @ts-ignore
  build: config.build,
  meta: {
    link: config.meta.link,
    meta: config.meta.meta,
    script: config.meta.script,
  },
  modules: [
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@vueuse/nuxt', // https://vueuse.org/guide/
    'nuxt-schema-org', // https://github.com/vueuse/schema-org
    // '@intlify/nuxt3', // https://github.com/intlify/nuxt3
    // '@nuxtjs/i18n', // https://github.com/nuxt-community/i18n-module/tree/next
    '@nuxt/content', // https://content.nuxtjs.org/get-started
    // 'nuxt-icons' // https://github.com/gitFoxCode/nuxt-icons
  ],
  tailwindcss: config.modules.tailwindcss,
  vueuse: config.modules.vueuse,
  // intlify: config.modules.intlify,
  schemaOrg: config.modules.schemaOrg,
  content: config.modules.content,
  // i18n: config.modules.i18n,
  // http://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    ...config.runtimeConfigPrivate,
    public: config.runtimeConfigPublic,
  },
  typescript: {
    strict: true, // for pinia
    shim: false, // with Take Over Mode from https://github.com/johnsoncodehk/volar/discussions/471
  },
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#vite
  vite: {
    plugins: [
      svgLoader({
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  inlineStyles: {
                    onlyMatchedOnce: false,
                  },
                },
              },
            },
          ],
        },
      }),
    ],
  },
})

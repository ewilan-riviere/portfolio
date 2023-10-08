import { config, head, modules } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit', // https://github.com/harlan-zw/nuxt-seo-kit
  ],
  app: {
    head: {
      link: head.link,
      meta: head.meta,
      script: head.script,
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@vueuse/nuxt', // https://vueuse.org/guide
    'unplugin-svg-transformer/nuxt', // https://github.com/kiwilan/unplugin-svg-transformer
  ],
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  linkChecker: {
    // failOn404: false,
    // failOn404: false,
    exclude: ['*'],
  },
  runtimeConfig: {
    ...config.private,
    public: config.public,
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  experimental: {
    typedPages: false, // https://nuxt.com/docs/guide/going-further/experimental-features#typedpages
  },
  devtools: { enabled: true },
})

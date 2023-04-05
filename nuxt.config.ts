// eslint-disable-next-line unused-imports/no-unused-imports
import { head, modules, runtimeConfigPrivate, runtimeConfigPublic } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: head.link,
      meta: head.meta,
      script: head.script,
    },
  },
  css: ['~/assets/css/main.css'],
  // extends: '@nuxt-themes/docus',
  modules: [
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/getting-started
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html#installation
    '@vueuse/nuxt', // https://vueuse.org/guide/index.html#nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
    // 'nuxt-seo-kit', // https://github.com/harlan-zw/nuxt-seo-kit
  ],
  colorMode: modules.colorMode,
  content: modules.content,
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  typedLink: modules.typedLink,

  runtimeConfig: {
    ...runtimeConfigPrivate,
    public: runtimeConfigPublic,
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  typescript: {
    shim: false,
  },
})

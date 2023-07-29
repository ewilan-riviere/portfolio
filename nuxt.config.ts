import { config, head, modules } from './config'

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

  extends: [
    // '@nuxt-themes/docus', // https://github.com/nuxt-themes/docus
    // 'nuxt-seo-kit', // https://github.com/harlan-zw/nuxt-seo-kit
  ],
  modules: [
    '@nuxt/devtools', // https://devtools.nuxtjs.org
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
    // '@nuxt/content', // https://content.nuxtjs.org,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@vueuse/nuxt', // https://vueuse.org/guide/index.html#nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
  ],

  colorMode: modules.colorMode,
  // content: modules.content,
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  typedLink: modules.typedLink,

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
    componentIslands: true,
  },

  typescript: {
    shim: false,
  },
})

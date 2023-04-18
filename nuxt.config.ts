import { head, modules } from './config'

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
    '@nuxt-themes/docus',
    'nuxt-seo-kit', // https://github.com/harlan-zw/nuxt-seo-kit
  ],
  modules: [
    '@nuxt/devtools', // https://devtools.nuxtjs.org
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
    '@nuxt/content', // https://content.nuxtjs.org,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@vueuse/nuxt', // https://vueuse.org/guide/index.html#nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
  ],

  colorMode: modules.colorMode,
  content: modules.content,
  // i18n: modules.i18n,
  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
      },
    ],
    defaultLocale: 'en',
    vueI18n: './config/locales/i18n.config.ts',
    // vueI18n: './config/locales/i18n.config.ts',
  },
  svgTransformer: modules.svgTransformer,
  typedLink: modules.typedLink,

  // runtimeConfig: {
  //   ...runtimeConfigPrivate,
  //   public: runtimeConfigPublic,
  // },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
      apiUrl: process.env.API_URL ?? 'http://app.toolbelt.test',
      mailToAddress: process.env.MAIL_TO_ADDRESS ?? 'contact@email.com',

      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: 'Portfolio',
      siteDescription: 'Welcome to my portfolio',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
    secretKey: process.env.SECRET_KEY ?? '',
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
  devtools: {
    enabled: true,
    vscode: {},
  },
})

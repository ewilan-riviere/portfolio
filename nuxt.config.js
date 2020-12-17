require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ewilan Rivière · Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app'],

  loading: {
    color: '#800080',
    height: '5px',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/icons-loader', ssr: false },
    { src: '~/plugins/vue-tailwind-screens', mode: 'client' },
    { src: '~/plugins/v-tooltip', ssr: false },
    { src: '~/plugins/vue-scrollto' },
    { src: '~/plugins/swiper' },
    { src: '~/plugins/i18n' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/global-components
    '@nuxtjs/global-components',
    // https://github.com/nuxt-community/dotenv-module#readme
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/router-module
    ['@nuxtjs/router', { keepDefaultRouter: true }],
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  dotenv: {},

  globalComponents: {},

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    messages: {
      en: '~/plugins/locales/en',
      fr: '~/plugins/locales/fr',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ewilan Rivière',
    titleTemplate: '%s · Portfolio',
    htmlAttrs: {
      lang: 'en-US',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Ewilan Riviere's portfolio to present my projects and my background in development.",
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Ewilan Riviere',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Ewilan Riviere',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ewilan-riviere.com/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ewilan Riviere · Portfolio',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Ewilan Riviere's portfolio to present my projects and my background in development.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/open-graph.png`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.BASE_URL}/open-graph.png`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Ewilan Riviere · Portfolio',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'ewilan-riviere.com',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:title',
        content: 'https://ewilan-riviere.com/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Ewilan Riviere · Portfolio',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Ewilan Riviere's portfolio to present my projects and my background in development.",
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: `${process.env.BASE_URL}/open-graph.png`,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Ewilan Riviere · Portfolio',
      },
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
    { src: '~/plugins/v-tooltip', ssr: false },
    { src: '~/plugins/vue-scrollto' },
    { src: '~/plugins/swiper' },
    { src: '~/plugins/i18n' },
    // https://github.com/paulcollett/vue-masonry-css
    { src: '~/plugins/vue-masonry-css', ssr: false },
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
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  dotenv: {},

  globalComponents: {},

  colorMode: {
    classSuffix: '',
  },

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

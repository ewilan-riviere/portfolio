require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    // titleTemplate: '%s - ' + 'Portfolio · Ewilan Rivière',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f3c9d7' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss', '@/assets/css/_fonts.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/global-components-loader' },
    { src: '@/plugins/vue-icons-loader', mode: 'client' },
    { src: '@/plugins/vue-helper' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/router', { keepDefaultRouter: true }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
  ],
  /*
   ** Style resources module configuration
   ** See https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    // your settings here
    sass: [],
    scss: ['./assets/css/_variables.scss'],
    less: [],
    stylus: [],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    extractCSS: process.env.NODE_ENV === 'production',
    transpile: ['swiper'],
  },
}

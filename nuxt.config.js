require('dotenv').config()
/* eslint-disable prettier/prettier */
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    title: 'Ewilan Rivière · Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/scss/fonts.scss', lang: 'scss' },
    { src: '~assets/scss/global.scss', lang: 'scss' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/vuetify', { customVariables: ['~/assets/variables.scss'] }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/router',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', { baseURL: process.env.BASE_URL }],
    '@nuxtjs/dotenv'
  ],
  env: {
    baseURL: process.env.BASE_URL
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}

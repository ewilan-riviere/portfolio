// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started
  ],
  // https://content.nuxtjs.org/api/configuration
  content: {

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

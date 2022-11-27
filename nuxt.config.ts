// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    'nuxt-svg-transformer',
  ],
  // https://content.nuxtjs.org/api/configuration
  content: {
    documentDriven: true,
    // fullTextSearchFields: ['title', 'description', 'slug'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    'nuxt-ray',
    'nuxt-svg-transformer',
  ],
  // ray: {
  //   port: 23517,
  // },
  svgTransformer: {
  },
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

import { defineNuxtConfig } from 'nuxt'
import markdownPlugin from 'vite-plugin-markdown'
import svgLoader from 'vite-svg-loader'
import markdown from '@dansvel/vite-plugin-markdown'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      // @ts-ignore
      order: ['tailwindcss/nesting', 'tailwindcss', 'autoprefixer'],
      plugins: {
        'postcss-nested': false,
      },
    },
  },
  vite: {
    plugins: [
      // markdownPlugin(),
      markdown({}),
      svgLoader(),
    ],
  },
  buildModules: ['@pinia/nuxt', '@vueuse/nuxt'],
  modules: ['@nuxtjs/tailwindcss'],
  meta: {
    title: 'Bookshelves',
    script: [
      {
        src: '/color-mode.js',
      },
    ],
  },
  typescript: {
    strict: true, // for pinia
    shim: false, // with Take Over Mode from https://github.com/johnsoncodehk/volar/discussions/471
  },
})

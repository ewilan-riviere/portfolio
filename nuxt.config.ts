// import { createWriteStream } from 'fs'
import { head, modules, runtimeConfigPrivate, runtimeConfigPublic } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: head.link,
      meta: head.meta,
      script: head.script,
    },
  },
  css: ['~/assets/css/app.css'],

  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/getting-started
    'nuxt-schema-org', // https://vue-schema-org.netlify.app/guide/getting-started/nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html#installation
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
    '@vueuse/nuxt', // https://vueuse.org/guide/
  ],
  content: modules.content,
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  schemaOrg: modules.schemaOrg,
  typedLink: modules.typedLink,

  runtimeConfig: {
    ...runtimeConfigPrivate,
    public: runtimeConfigPublic,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

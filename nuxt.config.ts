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
  css: ['~/assets/css/main.css'],
  extends: '@nuxt-themes/typography',
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/getting-started
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html#installation
    // '@vueuse/nuxt', // https://vueuse.org/guide/
    // 'nuxt-schema-org', // https://vue-schema-org.netlify.app/guide/getting-started/nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
  ],
  content: modules.content,
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  // schemaOrg: modules.schemaOrg,
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
  typescript: {
    shim: false,
  },
})

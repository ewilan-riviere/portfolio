import { defineNuxtConfig } from "nuxt"
// import markdownPlugin from 'vite-plugin-markdown'
import svgLoader from "vite-svg-loader"
import markdown from "@dansvel/vite-plugin-markdown"
import config from "./utils/config"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // @ts-ignore
  build: config.build,
  meta: {
    link: config.meta.link,
    meta: config.meta.meta,
    script: config.meta.script,
  },
  modules: [
    "@nuxtjs/tailwindcss", // https://tailwindcss.nuxtjs.org
    "@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html
    "@vueuse/nuxt", // https://vueuse.org/guide/
    // 'nuxt-schema-org', // https://github.com/vueuse/schema-org
  ],
  tailwindcss: config.modules.tailwindcss,
  vueuse: config.modules.vueuse,
  // schemaOrg: config.modules.schemaOrg,
  // http://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    ...config.runtimeConfigPrivate,
    public: config.runtimeConfigPublic,
  },
  typescript: {
    strict: true, // for pinia
    shim: false, // with Take Over Mode from https://github.com/johnsoncodehk/volar/discussions/471
  },
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#vite
  vite: {
    plugins: [
      // markdownPlugin(),
      markdown({}),
      svgLoader(),
    ],
  },
})

import { defineNuxtConfig } from 'nuxt'
import Vue from '@vitejs/plugin-vue'
import AntfuMarkdown from 'vite-plugin-md'
const mdPlugin = require('vite-plugin-markdown')
import markdown from '@dansvel/vite-plugin-markdown'
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      // Vue({
      // include: [/\.vue$/, /\.md$/],
      // }),
      // Markdown(),
      // mdPlugin({}),
      markdown({}),
      // vitePluginMdToHTML()
    ],
  },
  modules: ['@nuxtjs/tailwindcss'],
})

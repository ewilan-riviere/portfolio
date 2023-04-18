import type { NuxtConfig } from '@nuxt/schema'

// https://content.nuxtjs.org/api/configuration
const content: NuxtConfig['content'] = {
  documentDriven: false,
  // fullTextSearchFields: ['title', 'description', 'slug'],
  highlight: {
    preload: ['apache', 'bash', 'cmd', 'dart', 'diff', 'css', 'html', 'groovy', 'ini', 'js', 'javascript', 'json', 'latex', 'lua', 'nginx', 'php', 'powershell', 'ps1', 'ruby', 'tex', 'typescript', 'ts', 'sass', 'scss', 'sql', 'vue', 'vue-html', 'vim', 'yaml', 'xml'],
    // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
    theme: 'github-dark',
  },
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  markdown: {
    remarkPlugins: [
      // 'remark-reading-time',
      // 'remark-emoji'
    ],
    toc: { depth: 3, searchDepth: 3 },
  },
  navigation: {
    fields: ['navTitle'],
  },
}

const i18n: NuxtConfig['i18n'] = {
  baseUrl: process.env.BASE_URL,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
    },
  ],
  defaultLocale: 'en',
  vueI18n: './config/locales/i18n.config.ts',
}

// const schemaOrg: object = {
//   disableRuntimeScriptsWhenSSR: true,
//   canonicalHost: 'https://ewilan-riviere.com',
//   defaultLanguage: 'en-US',
// }

// https://github.com/kiwilan/nuxt-svg-transformer
const svgTransformer: NuxtConfig['svgTransformer'] = {
  title: false,
  sizeInherit: true,
}

// https://github.com/kiwilan/nuxt-typed-link
const typedLink: NuxtConfig['typedLink'] = {
  i18n: true,
}

// https://color-mode.nuxtjs.org/
const colorMode: NuxtConfig['colorMode'] = {
  classSuffix: '',
}

const modules = {
  content,
  i18n,
  svgTransformer,
  typedLink,
  colorMode,
}

export default modules

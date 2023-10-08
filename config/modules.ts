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

// https://i18n.nuxtjs.org/
const i18n: NuxtConfig['i18n'] = {
  baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
  locales: [{ code: 'en', iso: 'en-US', name: 'English' }, { code: 'fr', iso: 'fr-FR', name: 'Français' }],
  defaultLocale: 'en',
  vueI18n: './i18n.config.ts',
}

// https://github.com/kiwilan/unplugin-svg-transformer
const svgTransformer: NuxtConfig['svgTransformer'] = {
  svg: { sizeInherit: true },
}

// https://color-mode.nuxtjs.org/
const colorMode: NuxtConfig['colorMode'] = {
  classSuffix: '',
}

const modules = {
  content,
  i18n,
  svgTransformer,
  colorMode,
}

export default modules

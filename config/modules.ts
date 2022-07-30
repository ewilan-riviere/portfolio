import type { VueUseNuxtOptions } from '@vueuse/nuxt'
import type { NuxtConfig } from '@nuxt/schema'

const tailwindcss: NuxtConfig['tailwindcss'] = {
  exposeConfig: true,
}
const vueuse: VueUseNuxtOptions = {
  ssrHandlers: true,
}
// https://vue-schema-org.netlify.app/guide/setup/nuxt.html#_2-configure-the-module
const schemaOrg: NuxtConfig['schemaOrg'] = {
  disableRuntimeScriptsWhenSSR: true,
  canonicalHost: 'https://ewilan-riviere.com',
  defaultLanguage: 'en-US',
}

// https://content.nuxtjs.org/api/configuration
const content: NuxtConfig['content'] = {
  highlight: {
    preload: [
      'apache',
      'bash',
      'cmd',
      'dart',
      'diff',
      'css',
      'html',
      'groovy',
      'ini',
      'js',
      'javascript',
      'json',
      'latex',
      'lua',
      'nginx',
      'php',
      'powershell',
      'ps1',
      'ruby',
      'tex',
      'typescript',
      'ts',
      'sass',
      'scss',
      'sql',
      'vue',
      'vue-html',
      'vim',
      'yaml',
      'xml',
    ],
    // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
    theme: 'css-variables',
  },
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  markdown: {
    remarkPlugins: [
      'remark-reading-time',
      // 'remark-emoji'
    ],
    toc: { depth: 3, searchDepth: 3 },
  },
  navigation: {
    fields: ['navTitle'],
  },
}

const modules = {
  tailwindcss,
  vueuse,
  schemaOrg,
  content,
}

export default modules

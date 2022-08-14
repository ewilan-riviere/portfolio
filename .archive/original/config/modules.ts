import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { NuxtConfig } from '@nuxt/schema'
// import { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module'
// import { IntlifyModuleOptions } from '@intlify/nuxt3'

const tailwindcss: NuxtConfig['tailwindcss'] = {
  exposeConfig: true,
}
const vueuse: VueUseNuxtOptions = {
  ssrHandlers: true,
}
// https://vue-schema-org.netlify.app/guide/setup/nuxt.html#_2-configure-the-module
const schemaOrg: NuxtConfig['schemaOrg'] = {
  canonicalHost: process.env.BASE_URL,
}

// const intlify: IntlifyModuleOptions = {
//   localeDir: 'locales',
//   vueI18n: {
//     locale: 'en',
//     fallbackLocale: 'en',
//     availableLocales: ['en', 'fr'],
//   },
// }

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

// const i18n: NuxtI18nOptions = {
//   baseUrl: process.env.BASE_URL,
//   defaultLocale: 'en',
//   langDir: 'locales',
//   lazy: true,
//   locales: [
//     {
//       code: 'en',
//       iso: 'en-US',
//       file: 'en.json',
//       name: 'English'
//     },
//     {
//       code: 'fr',
//       iso: 'fr-FR',
//       file: 'fr.json',
//       name: 'Français'
//     }
//   ],
// }

const modules = {
  tailwindcss,
  vueuse,
  schemaOrg,
  // intlify,
  content,
  // i18n
}

export default modules

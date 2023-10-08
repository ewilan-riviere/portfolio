import type { NuxtConfig } from '@nuxt/schema'

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

const modules = {
  i18n,
  svgTransformer,
}

export default modules

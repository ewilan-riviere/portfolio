// Disabled cause of https://github.com/nuxt-modules/i18n/issues/2000
// From "@nuxtjs/i18n": "8.0.0-beta.11",
// To "@nuxtjs/i18n": "8.0.0-beta.8"

// import type { LocaleMessage } from '@intlify/core-base'
// import type { I18nOptions } from '@nuxtjs/i18n'

// export default defineI18nConfig(async (): Promise<I18nOptions> => ({
//   legacy: false,
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: await loadLocale('en-sample'),
//     // fr: await loadLocale('fr'),
//   },
// }))

// async function loadLocale(locale: string): Promise<LocaleMessage> {
//   return await import(`./config/locales/${locale}.ts`).then(module => module.default)
//   // return  {
//   //   welcome: 'Welcome',
//   // }
// }

// import { createI18n } from 'vue-i18n'

// import en from '../locales/en.json'
// import fr from '../locales/fr.json'

// /**
//  * vue-i18n TypeScript & autocomplete support
//  *
//  * Add ability to import TypeScript translation file: https://github.com/intlify/vite-plugin-vue-i18n/issues/35
//  * lokalise/i18n-ally: https://github.com/lokalise/i18n-ally
//  * vite-plugin-vue-i18n: https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
//  * docs: https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
//  * intlify/nuxt3: https://github.com/intlify/nuxt3
//  * @nuxtjs/i18n: https://github.com/nuxt-community/i18n-module/tree/next
//  *
//  * ```ts
//  * const { t, d, n, tm } = useI18n()
//  *
//  * t('hello', 'ewie')
//  * n(1000, 'currency')
//  * d(new Date(), 'short')
//  * ```
//  */
// const i18n = createI18n({
//   legacy: false, // The default is to use the Legacy API mode. If you want to use the Composition API mode, you need to set it to false.
//   globalInjection: true, // If set to true, then properties and methods prefixed with $ are injected into Vue Component. https://vue-i18n.intlify.dev/api/general.html#globalinjection
//   locale: 'en',
//   fallbackLocale: 'en',
//   inheritLocale: true, // Whether inherit the root level locale to the component localization locale.
//   messages: {
//     en,
//     fr
//   },
//   datetimeFormats: {
//     fr: {
//       short: {
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         timeZoneName: 'short',
//         timezone: 'Europe/Paris'
//       }
//     }
//   },
//   numberFormats: {
//     en: {
//       currency: {
//         style: 'currency',
//         currencyDisplay: 'symbol',
//         currency: 'USD'
//       }
//     },
//     fr: {
//       currency: {
//         style: 'currency',
//         currencyDisplay: 'symbol',
//         currency: 'EUR'
//       }
//     }
//   }
// })

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(i18n)
// })

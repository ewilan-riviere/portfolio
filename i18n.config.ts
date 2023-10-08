import type { LocaleMessage } from '@intlify/core-base'

export default defineI18nConfig(async () => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'fr'],
  messages: {
    en: await loadLocale('en'),
    fr: await loadLocale('fr'),
  },
}))

async function loadLocale(locale: string): Promise<LocaleMessage> {
  return await import(`./config/locales/${locale}.json`).then(module => module.default)
}

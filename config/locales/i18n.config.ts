import en from './en'
import fr from './fr'

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  }
})

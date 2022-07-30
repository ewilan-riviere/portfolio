import { defineStore } from 'pinia'
import enJson from '../locales/en.json'
import frJson from '../locales/fr.json'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    availableLocales: ['en', 'fr'],
    locale: 'en' as LocaleList,
  }),
  getters: {
    currentLocale: state => state.locale,
  },
  actions: {
    translate(key: string) {
      const locale = this.getStorageLocale()
      const locales = {
        en: enJson,
        fr: frJson,
      }
      const currentLocale = locales[locale] ?? enJson

      return this.getValue(currentLocale, key)
    },
    getValue(obj: Keyable, path: string): any {
      try {
        if (!path)
          return obj
        const properties = path.split('.')
        const key = properties.shift() as string
        return this.getValue(obj[key], properties.join('.')) ?? path
      }
      catch (error) {
        return path
      }
    },
    getStorageLocale() {
      let locale: LocaleList = 'en'
      if (process.client)
        locale = localStorage.getItem('locale') as LocaleList ?? 'en'

      return locale
    },
    transLocale(locale: LocaleList | string) {
      const locales: Keyable = {
        en: 'English',
        fr: 'Français',
      }

      return locales[locale] ?? locale
    },
    switchLocale(payload: LocaleList | string) {
      const locale = payload as LocaleList
      localStorage.setItem('locale', locale)

      this.$patch({
        locale,
      })
    },
    initLocale() {
      if (process.client) {
        const localeStorageLocale = localStorage.getItem('locale') as LocaleList
        if (localeStorageLocale) {
          this.switchLocale(localeStorageLocale)
        }
        else {
          const navigatorLanguage = navigator.language
          const navigatorLocale = navigatorLanguage.split('-')[0] as LocaleList
          this.switchLocale(navigatorLocale)
        }
      }
    },
  },
})

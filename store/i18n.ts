import { defineStore } from 'pinia'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    availableLocales: ['en', 'fr'],
    locale: 'en' as LocaleList
  }),
  getters: {
    // getToasts(state) {
    //   return state.toasts.reduce((items) => {
    //     return items
    //   }, [] as Toast[])
    // },
  },
  actions: {
    changeLocale(payload: LocaleList) {
      this.$patch({
        locale: payload,
      })
    },
  },
})

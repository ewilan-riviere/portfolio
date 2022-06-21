import { defineNuxtPlugin } from '#app'
// import { useI18n } from "vue-i18n"
// const { t } = useI18n()

export default defineNuxtPlugin(() => {
  return {
    provide: {
      localePath: (route: Route) => route,
      t: (path: string) => path,
      // t: (path: string) => t(path),
    },
  }
})

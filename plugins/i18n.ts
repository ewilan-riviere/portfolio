import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      localePath: (route: Route) => route,
      t: (path: string) => path,
    },
  }
})

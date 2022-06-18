import { VueUseNuxtOptions } from "@vueuse/nuxt"
import { ModuleOptions, NuxtConfig } from "@nuxt/schema"
import { IntlifyModuleOptions } from "@intlify/nuxt3"

const tailwindcss: NuxtConfig["tailwindcss"] = {
  exposeConfig: true,
}
const vueuse: VueUseNuxtOptions = {
  ssrHandlers: true,
}
// https://vue-schema-org.netlify.app/guide/setup/nuxt.html#_2-configure-the-module
const schemaOrg = {
  canonicalHost: "https://nuxtjs.org",
}

const intlify: IntlifyModuleOptions = {
  localeDir: "locales",
  vueI18n: {
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en", "fr"],
  },
}

const modules: ModuleOptions = {
  tailwindcss,
  vueuse,
  schemaOrg,
  intlify,
}

export default modules

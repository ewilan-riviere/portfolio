import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions } from '@nuxt/schema'

const tailwindcss: Partial<ModuleOptions> = {
  exposeConfig: true,
}
const vueuse: VueUseNuxtOptions = {
  ssrHandlers: true,
}
// https://vue-schema-org.netlify.app/guide/setup/nuxt.html#_2-configure-the-module
const schemaOrg = {
  canonicalHost: 'https://nuxtjs.org',
}

const modules: ModuleOptions = {
  tailwindcss: tailwindcss,
  vueuse: vueuse,
  schemaOrg: schemaOrg,
}

export default modules

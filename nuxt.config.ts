// import { createWriteStream } from 'fs'
import { head, modules, runtimeConfigPrivate, runtimeConfigPublic } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: head.link,
      meta: head.meta,
      script: head.script,
    },
  },
  css: ['~/assets/css/app.css'],

  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/get-started,
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/getting-started
    'nuxt-schema-org', // https://vue-schema-org.netlify.app/guide/getting-started/nuxt
    'nuxt-svg-transformer', // https://github.com/kiwilan/nuxt-svg-transformer
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html#installation
    'nuxt-typed-link', // https://github.com/kiwilan/nuxt-typed-link
    '@vueuse/nuxt', // https://vueuse.org/guide/
  ],
  content: modules.content,
  i18n: modules.i18n,
  svgTransformer: modules.svgTransformer,
  schemaOrg: modules.schemaOrg,
  typedLink: modules.typedLink,

  runtimeConfig: {
    ...runtimeConfigPrivate,
    public: runtimeConfigPublic,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // hooks: {
  //   'pages:extend': (pages) => {
  //     const routes: {
  //       name?: string
  //       path: string
  //       params?: Record<string, string>
  //     }[] = []

  //     pages.forEach((route) => {
  //       let haveParams = false
  //       let params = {}
  //       if (route.path.includes(':')) {
  //         haveParams = true
  //         const path = route.path.replace(/\/$/, '')
  //         const pathParts = path.split('/')
  //         const pathParams = pathParts.filter(part => part.startsWith(':'))
  //         params = pathParams.reduce((acc, param) => {
  //           const key = param.replace(':', '')
  //           return { ...acc, [key]: 'string' }
  //         }, {})
  //       }

  //       routes.push({
  //         name: route.name,
  //         path: route.path,
  //         params: haveParams ? params : undefined,
  //       })
  //     })

  //     const stream = createWriteStream('nuxt-router.ts')
  //     stream.once('open', () => {
  //       stream.write('export const routes = {\n')
  //       routes.forEach((route) => {
  //         stream.write(`  '${route.name}': {\n`)
  //         stream.write(`    name: '${route.name}',\n`)
  //         stream.write(`    path: '${route.path}',\n`)
  //         stream.write('    params: {\n')
  //         if (route.params) {
  //           Object.keys(route.params).forEach((key) => {
  //             if (route.params)
  //               stream.write(`      ${key}: '${route.params[key]}',\n`)
  //           })
  //         }
  //         stream.write('    },\n')
  //         stream.write('  },\n')
  //       })
  //       stream.write('}\n')
  //       stream.write('export type TypedRouteList =\n')
  //       routes.forEach((route) => {
  //         stream.write(`  | '${route.name}'\n`)
  //       })
  //       stream.write('export type TypedRouteParams = {\n')
  //       routes.forEach((route) => {
  //         if (route.params) {
  //           stream.write(`  '${route.name}': {\n`)
  //           Object.keys(route.params).forEach((param) => {
  //             stream.write(`    ${param}: string | number\n`)
  //           })
  //           stream.write('  }\n')
  //         }
  //         else { stream.write(`  '${route.name}': never\n`) }
  //       })
  //       stream.write('}\n')
  //       stream.write('export interface RouteType {\n')
  //       stream.write('  name: TypedRouteList\n')
  //       stream.write('  params?: TypedRouteParams[TypedRouteList]\n')
  //       stream.write('  query?: Record<string, string>\n')
  //       stream.write('}\n')
  //       stream.end()
  //     })
  //   },
  // },
})

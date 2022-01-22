import metadata from './plugins/config/metadata'
import pwa from './plugins/config/pwa'
// import sitemaps from './plugins/config/sitemaps'
// import crawler from './plugins/config/crawler'

import metadataDynamic from './plugins/config/metadata-dynamic'
import metadataStatic from './plugins/config/metadata-static'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    apiEmail: process.env.API_EMAIL,
    apiPassword: process.env.API_PASSWORD,
  },

  // For static site generation
  generate: {
    crawler: true,
    // routes: crawler,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: metadata.websitetitle,
    titleTemplate: metadata.websitetitleTemplate,
    htmlAttrs: {
      lang: metadata.settings.locale,
    },
    meta: [...metadataStatic(), ...metadataDynamic()],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  loading: {
    color: metadata.settings.color,
    height: '2px',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app.css'],

  plugins: [
    // global helper methods
    '~/plugins/utils/helpers',
    // Global notifications
    '~/plugins/bus.client.js',
    // https://github.com/ymmooot/nuxt-jsonld
    '~/plugins/utils/jsonld',
    // https://i18n.nuxtjs.org
    // '~/plugins/utils/i18n',
    // https://github.com/ndelvalle/v-click-outside
    '~/plugins/v-click-outside',
    // https://github.com/surmon-china/vue-awesome-swiper
    '~/plugins/vue-awesome-swiper.client.js',
  ],

  // GitHub: https://github.com/nuxt/components
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://html-validator.nuxtjs.org/
    // '@nuxtjs/html-validator',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
  },
  svgSprite: {},
  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    // '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide/setup
    // '@nuxtjs/sitemap',
    // https://gitlab.com/broj42/nuxt-lazy-load
    'nuxt-lazy-load',
    // https://i18n.nuxtjs.org/setup/
    'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
    // https: false,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json, text/plain, */*',
      },
    },
  },
  pwa: {
    meta: pwa.meta,
    manifest: pwa.manifest,
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
    nestedProperties: [
      'metadata.isDraft',
      'metadata.isFavorite',
      'metadata.createdAt',
      'metadata.beginDate',
    ],
    // https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
    markdown: {},
  },
  // robots: {
  //   Disallow: metadata.settings.disallow.split(','),
  //   Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  // },
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: process.env.BASE_URL,
  //   cacheTime: 1000 * 60 * 15,
  //   gzip: true,
  //   exclude: metadata.settings.disallow,
  //   sitemaps: sitemaps(),
  // },
  'nuxt-lazy-load': {
    directiveOnly: true,
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
        name: 'English',
      },
      {
        code: 'fr',
        file: 'fr.js',
        name: 'Français',
      },
    ],
    lazy: true,
    defaultLocale: 'en',
    langDir: 'lang/',
  },
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const readingTime = require('reading-time')
        const stats = readingTime(document.text)

        document.readingTime = stats

        // add projects metadata
        if (document.path.includes('projects')) {
          const developers = require(`./static/data/projects/developers.json`)
          const frameworks = require(`./static/data/skills/frameworks.json`)
          const languages = require(`./static/data/skills/languages.json`)
          const talking = require(`./static/data/skills/talking.json`)
          const tools = require(`./static/data/skills/tools.json`)
          const skills = { ...frameworks, ...languages, ...talking, ...tools }

          let meta = {}
          try {
            meta = require(`./static/data/projects/metadata/${document.slug}.json`)
          } catch (error) {
            console.error(error)
          }
          document.metadata = meta

          // link developers
          if (
            document.metadata.developers &&
            document.metadata.developers.length
          ) {
            const developersData = []
            document.metadata.developers.forEach((element) => {
              if (Object.keys(developers).includes(element.slug)) {
                developersData.push({
                  ...developers[element.slug],
                  role: element.role,
                })
              }
            })
            document.metadata = {
              ...document.metadata,
              developers: developersData,
            }
          }

          // link technologies
          if (document.metadata.skills && document.metadata.skills.length) {
            const skillsData = []
            document.metadata.skills.forEach((element) => {
              if (Object.keys(skills).includes(element)) {
                skillsData.push({
                  ...skills[element],
                })
              }
            })
            document.metadata = {
              ...document.metadata,
              skills: skillsData,
            }
          }

          document.date = new Date(document.metadata.createdAt)
        }

        // add trainings metdata
        if (document.path.includes('trainings')) {
          const trainings = require(`./static/data/trainings/trainings.json`)

          let meta = {}
          if (Object.keys(trainings).includes(document.slug)) {
            meta = {
              ...trainings[document.slug],
            }
          }
          document.metadata = meta

          document.date = new Date(document.metadata.dateBegin)
        }
      }
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
  },
}

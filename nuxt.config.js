import metadata from './plugins/metadata/metadata'
import sitemaps from './plugins/utils/sitemaps'

import metadataDynamic from './plugins/metadata/metadata-dynamic'
import metadataStatic from './plugins/metadata/metadata-static'

export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiURL: process.env.API_URL,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: metadata.tags.title,
    titleTemplate: metadata.tags.titleTemplate,
    htmlAttrs: {
      lang: metadata.settings.locale,
    },
    meta: [...metadataStatic(), ...metadataDynamic()],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: metadata.settings.color,
    height: '2px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/app'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // global helper methods
    '~/plugins/utils/helpers',
    // https://github.com/ymmooot/nuxt-jsonld
    '~/plugins/utils/jsonld',
    // https://i18n.nuxtjs.org
    '~/plugins/utils/i18n',
    // https://github.com/ndelvalle/v-click-outside
    '~/plugins/v-click-outside',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // https://gitlab.com/broj42/nuxt-lazy-load
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
      },
    ],
    // https://i18n.nuxtjs.org/setup/
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: metadata.tags.title,
      author: process.env.META_AUTHOR || metadata.tags.author,
      description: metadata.tags.description,
      theme_color: metadata.settings.color,
      lang: metadata.settings.lang,
      ogSiteName: metadata.og.siteName,
      ogTitle: metadata.tags.title,
      ogDescription: metadata.tags.description,
      ogImage: `${process.env.BASE_URL}/default.jpg`,
      ogUrl: process.env.BASE_URL,
      twitterSite: metadata.twitter.site,
      twitterCreator: metadata.twitter.creator,
    },
    manifest: {
      name: metadata.tags.title,
      short_name: metadata.og.siteName,
      description: metadata.tags.description,
      display: 'browser',
      lang: metadata.settings.lang,
    },
  },
  robots: {
    Disallow: metadata.settings.disallow,
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: metadata.settings.disallow,
    sitemaps: sitemaps(),
  },
  googleFonts: {
    families: {
      Quicksand: true,
    },
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
    // vueI18n: {
    //   fallbackLocale: 'en',
    //   messages: {
    //     en: './lang/en.js',
    //     fr: './lang/fr.js'
    //   }
    // }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
  },
}

const link = [
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    href: '/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg'
  },
  { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
  {
    rel: 'manifest',
    crossorigin: 'use-credentials',
    href: '/site.webmanifest'
  }
]
const meta = [
  {
    hid: 'robots',
    name: 'robots',
    content: 'index,follow'
  },
  { name: 'msapplication-TileColor', content: '#ffffff' },
  {
    name: 'theme-color',
    content: '#ffffff'
  },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  {
    hid: 'author',
    name: 'author',
    content: 'Ewilan Rivière'
  },
  {
    hid: 'language',
    name: 'language',
    content: 'en-US'
  },
  {
    hid: 'designer',
    name: 'designer',
    content: 'Ewilan Rivière'
  },
  {
    hid: 'publisher',
    name: 'publisher',
    content: 'Ewilan Rivière - Portfolio'
  },
  {
    hid: 'copyright',
    name: 'copyright',
    content: 'Ewilan Rivière - Portfolio'
  },
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'Ewilan Rivière'
  },
  {
    hid: 'og:locale',
    property: 'og:locale',
    content: 'en-US'
  },
  {
    hid: 'twitter:site',
    name: 'twitter:site',
    content: '@ewilanriviere'
  },
  {
    hid: 'twitter:creator',
    name: 'twitter:creator',
    content: '@ewilanriviere'
  },
  {
    hid: 'google-site-verification',
    name: 'google-site-verification',
    content: 'HlYyBKngNkGks_Ys_Yebcn0UcKoCz1o-XMxuCzgMmuk'
  },
  {
    hid: 'og:type',
    property: 'og:type',
    content: 'website'
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.BASE_URL
  },
  {
    hid: 'og:image:alt',
    property: 'og:image:alt',
    content: 'Ewilan Rivière'
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image'
  }
]
const script = [
  {
    src: '/color-mode.js'
  },
  {
    async: true,
    defer: true,
    'data-website-id': '52ad2483-3446-4416-a486-ceb570dd05f9',
    src: 'https://umami.git-projects.xyz/umami.js'
  }
]

export default { link, meta, script }

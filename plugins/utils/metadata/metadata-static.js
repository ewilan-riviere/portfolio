const metadata = require('./metadata.js')

export default () => {
  return [
    //
    // Settings
    //
    ...getSettings(),
    //
    // Meta tags
    //
    ...getMeta(),
    //
    // Open Graph
    //
    ...getOpenGraph(),
    //
    // Twitter card
    //
    ...getTwitterCard(),
  ]
}

function getSettings() {
  return [
    {
      hid: 'robots',
      name: 'robots',
      content: metadata.settings.robots,
    },
    { name: 'msapplication-TileColor', content: metadata.settings.color },
    { name: 'theme-color', content: metadata.settings.color },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'google-site-verification',
      name: 'google-site-verification',
      content: metadata.settings.googleToken,
    },
  ]
}

function getMeta() {
  return [
    {
      hid: 'author',
      name: 'author',
      content: metadata.websiteauthor,
    },
    {
      hid: 'language',
      name: 'language',
      content: metadata.websitelanguage,
    },
    {
      hid: 'designer',
      name: 'designer',
      content: metadata.websitedesigner,
    },
    {
      hid: 'publisher',
      name: 'publisher',
      content: metadata.websitepublisher,
    },
    {
      hid: 'copyright',
      name: 'copyright',
      content: metadata.websitecopyright,
    },
    {
      hid: 'rating',
      name: 'rating',
      content: metadata.websiterating,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: metadata.websitekeywords.join(','),
    },
  ]
}

function getOpenGraph() {
  return [
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: metadata.og.siteName,
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: metadata.settings.locale,
    },
  ]
}

function getTwitterCard() {
  return [
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: metadata.twitter.url,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: metadata.twitter.creator,
    },
  ]
}

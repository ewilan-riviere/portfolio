const app = 'Portfolio of Ewilan Rivière, web and mobile developer'
const author = 'Ewilan Rivière'
const tailwind = require('../../tailwind.config')
const color = tailwind.theme.extend.colors.primary[600]
const description =
  'Portfolio of Ewilan Rivière front-end and back-end web developer, specialized on NuxtJS and Laravel but also on mobile on Flutter.'

const twitter = '@ewilanriviere'
const twitterLink = twitter ? twitter.replace('@', '') : null

module.exports = {
  settings: {
    robots: 'index, follow',
    disallow: '',
    color,
    locale: 'en_US',
    lang: 'en',
    googleToken: process.env.GOOGLE_SITE_VERIFICATION_TOKEN || null,
  },
  website: {
    title: 'Portfolio of Ewilan Rivière',
    titleTemplate: `%s · ${app}`,
    description,
    rating: 'general',
    keywords: ['developer', 'web', 'mobile'],
    author,
    publisher: app,
    copyright: 'MIT License',
    language: 'english',
    designer: author,
  },
  og: {
    type: 'website',
    siteName: app,
  },
  twitter: {
    creator: twitter,
    site: twitter,
    url: `https://twitter.com/${twitterLink}`,
  },
  social: {
    github: 'https://github.com/ewilan-riviere',
    gitlab: 'https://gitlab.com/ewilan-riviere',
    stackoverflow: 'https://stackoverflow.com/users/story/11008206',
    twitter: `https://twitter.com/${twitterLink}`,
    linkedin: 'https://www.linkedin.com/in/ewilan-riviere',
    mail: 'mailto:contact@ewilan-riviere.com',
  },
}

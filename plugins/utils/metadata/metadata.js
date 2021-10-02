const app = "Portfolio d'Ewilan Rivière, développeuse web et mobile"
const author = 'Ewilan Rivière'
const tailwind = require('../../tailwind.config')
const color = tailwind.theme.extend.colors.primary[600]
const description =
  "Portfolio d'Ewilan Rivière développeuse web front-end et back-end, spécialisée sur NuxtJS et Laravel mais aussi sur mobile sur Flutter."

const twitterUsername = 'ewilanriviere'
const github = 'https://github.com/ewilan-riviere'
const gitlab = 'https://gitlab.com/ewilan-riviere'
const stackoverflow = 'https://stackoverflow.com/users/story/11008206'
const twitter = `https://twitter.com/${twitterUsername}`
const linkedin = 'https://www.linkedin.com/in/ewilan-riviere'
const mail = 'mailto:contact@ewilan-riviere.com'

module.exports = {
  settings: {
    robots: 'index, follow',
    disallow: '/sign-in,/sign-up,/dashboard,/admin,/profile',
    color,
    locale: 'en_US',
    lang: 'en',
    googleToken: process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
  },
  tags: {
    title: app,
    titleTemplate: `%s · ${author}`,
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
    creator: `@${twitterUsername}`,
    site: `@${twitterUsername}`,
    link: twitter,
  },
  social: {
    github,
    gitlab,
    stackoverflow,
    twitter,
    linkedin,
    mail,
  },
}

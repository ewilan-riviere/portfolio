const runtimeConfigPrivate = {
  secretKey: process.env.SECRET_KEY ?? '',
}
const runtimeConfigPublic = {
  baseUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  apiUrl: process.env.NUXT_PUBLIC_API_URL ?? 'http://app.toolbelt.test',
  mailToAddress: process.env.NUXT_PUBLIC_MAIL_TO_ADDRESS ?? 'contact@email.com',
  siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteName: 'Portfolio',
  siteDescription: 'Welcome to my portfolio',
  language: 'en-US', // prefer more explicit language codes like `en-AU` over `en`
}

export { runtimeConfigPrivate, runtimeConfigPublic }

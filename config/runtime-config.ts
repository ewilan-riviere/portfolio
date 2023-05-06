const runtimeConfigPrivate = {
  secretKey: process.env.SECRET_KEY ?? '',
}
const runtimeConfigPublic = {
  baseUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  apiUrl: process.env.NUXT_PUBLIC_API_URL ?? 'http://localhost:8000',
  mailToAddress: process.env.NUXT_PUBLIC_MAIL_TO_ADDRESS ?? 'contact@email.com',

  siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteName: 'Ewilan Rivière',
  siteDescription: 'Welcome to my portfolio',
  language: 'en', // prefer more explicit language codes like `en-AU` over `en`
}

export { runtimeConfigPrivate, runtimeConfigPublic }

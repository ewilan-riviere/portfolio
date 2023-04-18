const runtimeConfigPrivate = {
  secretKey: process.env.SECRET_KEY ?? '',
}
const runtimeConfigPublic = {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  apiUrl: process.env.API_URL ?? 'http://app.toolbelt.test',
  mailToAddress: process.env.MAIL_TO_ADDRESS ?? 'contact@email.com',
  siteUrl: process.env.BASE_URL || 'http://localhost:3000',
  siteName: 'Portfolio',
  siteDescription: 'Welcome to my portfolio',
  language: 'en-US', // prefer more explicit language codes like `en-AU` over `en`
}

export { runtimeConfigPrivate, runtimeConfigPublic }

const runtimeConfigPrivate = {
  secretKey: process.env.SECRET_KEY ?? ''
}
const runtimeConfigPublic = {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  apiUrl: process.env.API_URL ?? 'http://app.toolbelt.test',
  mailToAddress: process.env.MAIL_TO_ADDRESS ?? 'contact@email.com'
}

export { runtimeConfigPrivate, runtimeConfigPublic }

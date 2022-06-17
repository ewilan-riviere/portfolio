const runtimeConfigPrivate = {}
const runtimeConfigPublic = {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  apiUrl: process.env.API_URL ?? "http://app.toolbelt.test",
}

export { runtimeConfigPrivate, runtimeConfigPublic }

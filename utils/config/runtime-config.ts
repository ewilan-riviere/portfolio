const runtimeConfigPrivate = {}
const runtimeConfigPublic = {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
}

export { runtimeConfigPrivate, runtimeConfigPublic }

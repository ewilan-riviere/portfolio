declare module '@nuxt/schema' {
  interface RuntimeConfig {
    secretKey: string
    public: {
      baseUrl: string
      apiUrl: string
      mailToAddress: string
    }
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}

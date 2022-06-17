declare module "@nuxt/schema" {
  interface RuntimeConfig {
    public: {
      baseUrl: string
    }
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}

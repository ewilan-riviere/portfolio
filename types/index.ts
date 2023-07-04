declare module '@nuxt/schema' {
  interface RuntimeConfig {
    secretKey: string
    // @ts-expect-error Property 'public' does not exist on type 'RuntimeConfig'.
    public: {
      baseUrl: string
      apiUrl: string
      mailToAddress: string
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }

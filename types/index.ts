export * from './about'
export * from './app'
export * from './content'
export * from './developer'
export * from './feature'
export * from './history-item'
export * from './hobby'
// export * from './i18n'
export * from './markdown'
export * from './project-status'
export * from './project'
export * from './skill'
export * from './technology'
export * from './toast'

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    discordWebhook: string
    githubToken: string
  }
  interface PublicRuntimeConfig {
    siteUrl: string
    siteName: string
    siteDescription: string
    language: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }

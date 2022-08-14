import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    sidebar: false,
    main: [
      {
        label: 'home',
        route: {
          name: 'index'
        },
        icon: 'home'
      },
      {
        label: 'blog',
        route: {
          name: 'blog'
        },
        icon: 'blog'
      }
    ] as RouteLink[],
    external: [
      {
        label: 'Memorandum',
        href: 'https://memorandum.ewilan-riviere.com',
        icon: 'memorandum'
      }
    ] as {
      label: string
      href: string
      icon?: string
    }[]
  }),
  actions: {
    toggleSidebar (): boolean {
      this.$patch({
        sidebar: !this.sidebar
      })

      return this.sidebar
    },
    closeSidebar (): boolean {
      this.$patch({
        sidebar: false
      })

      return this.sidebar
    }
  }
})

import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    sidebar: false,
    main: [
      {
        label: 'books',
        route: {
          name: 'index',
        },
      },
      {
        label: 'series',
        route: {
          name: 'index',
        },
      },
      {
        label: 'authors',
        route: {
          name: 'index',
        },
      },
    ] as RouteLink[],
  }),
  actions: {
    toggleSidebar(): boolean {
      this.$patch({
        sidebar: !this.sidebar,
      })

      return this.sidebar
    },
    closeSidebar(): boolean {
      this.$patch({
        sidebar: false,
      })

      return this.sidebar
    },
  },
})

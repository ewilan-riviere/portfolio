export const state = () => ({
  header: {
    title: 'title',
    abstract: 'currentAbtract',
  },
  inDev: false,
  sidebarOpened: false,
  layerVisible: false,
})

export const mutations = {
  setHeader(state, data) {
    state.header = data
  },
  toggleInDev(state) {
    state.inDev = !state.inDev
  },
  toggleSidebarOpened(state) {
    state.sidebarOpened = !state.sidebarOpened
  },
  setLayerVisible(state, data) {
    state.layerVisible = data
  },
}

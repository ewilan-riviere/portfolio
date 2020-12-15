export const state = () => ({
  inDev: false,
  sidebarOpened: false,
  layerVisible: false,
})

export const mutations = {
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

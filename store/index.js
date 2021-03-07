export const state = () => ({
  header: {
    subtitle: 'Portfolio',
    title: 'Ewilan Rivière',
    abstract: 'Développeuse web & mobile chez Useweb, France',
  },
  inDev: false,
  sidebarOpened: false,
  layerVisible: false,
})

export const mutations = {
  setHeader(state) {
    state.headerTitle = !state.headerTitle
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

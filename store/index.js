export const state = () => ({
  header: {
    title: 'title',
    abstract: 'currentAbtract',
  },
  inDev: false,
  sidebarOpened: false,
  layerVisible: false,
  notificationIsDisplay: false,
  notification: {
    icon: 'airplane',
    title: 'success',
    text: 'contact_success_text',
    color: 'text-green-400',
  },
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
  toggleNotificationIsDisplay(state) {
    state.notificationIsDisplay = !state.notificationIsDisplay
  },
  setNotification(state, data) {
    state.notification = data
  },
}

import metadata from '~/plugins/metadata/metadata'
export const state = () => ({
  header: {
    image: '/images/hero.jpg',
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
  socialLinks: [
    {
      name: 'GitHub',
      link: metadata.social.github,
      icon: 'social/github',
      color: '#181717',
    },
    {
      name: 'GitLab',
      link: metadata.social.gitlab,
      icon: 'social/gitlab',
      color: '#FCA121',
    },
    {
      name: 'StackOverflow',
      link: metadata.social.stackoverflow,
      icon: 'social/stackoverflow',
      color: '#F58025',
    },
    // {
    //   name: 'Bit.dev',
    //   link: 'https://bit.dev/ewilan-riviere',
    //   icon: 'social/bit',
    // },
    {
      name: 'Twitter',
      link: metadata.social.twitter,
      icon: 'social/twitter',
      color: '#1DA1F2',
    },
    {
      name: 'LinkedIn',
      link: metadata.social.linkedin,
      icon: 'social/linkedin',
      color: '#0A66C2',
    },
    {
      name: 'E-mail',
      link: metadata.social.mail,
      icon: 'social/mail',
      color: '#EA4335',
    },
  ],
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

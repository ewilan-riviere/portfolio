export const state = () => ({
  technologies: [],
  users: []
})

export const mutations = {
  setTechnologies(state, technologies) {
    state.technologies = technologies
  },
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async getUsers({ commit }) {
    let [
      technologies,
      users
    ]
    = await Promise.all([
      this.$axios.$get(`technologies`),
      this.$axios.$get(`users`)
    ])
    commit('setTechnologies', technologies)
    commit('setUsers', users)
  }
}

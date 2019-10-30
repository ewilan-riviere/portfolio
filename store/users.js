export const state = () => ({
  formations: [],
  services: [],
  tools: [],
  agencies: [],
  users: []
})

export const mutations = {
  setFormations(state, formations) {
    state.formations = formations
  },
  setServices(state, services) {
    state.services = services
  },
  setTools(state, tools) {
    state.tools = tools
  },
  setAgencies(state, agencies) {
    state.agencies = agencies
  }
}

export const actions = {
  async getUsers({ commit }) {
    const [users] = await Promise.all([this.$axios.$get(`/users`)])
    commit('setUsers', users)
    // let [formations,services,tools,agencies]
    // = await Promise.all([
    //     this.$axios.$get(`/formations`),
    //     this.$axios.$get(`/service-categories`),
    //     this.$axios.$get(`/tools`),
    //     this.$axios.$get(`/agencies`)
    // ])
    // commit('setFormations', formations),
    // commit('setServices', services),
    // commit('setTools', tools),
    // commit('setAgencies', agencies)
  }
}

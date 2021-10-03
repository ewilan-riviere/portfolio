import axios from 'axios'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.authenticated
    },

    user(state) {
      return state.user
    },
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },

    SET_USER(state, value) {
      state.user = value
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      const instance = axios.create({
        baseURL: process.env.API_URL,
        withCredentials: true,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json, text/plain, */*',
        },
      })

      await instance.get('/sanctum/csrf-cookie')
      await instance.post('/login', credentials)

      return dispatch('me')
    },

    async signOut({ dispatch }) {
      const instance = axios.create({
        baseURL: process.env.API_URL,
        withCredentials: true,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json, text/plain, */*',
        },
      })
      await instance.post('logout')

      return dispatch('me')
    },

    me({ commit }) {
      const instance = axios.create({
        baseURL: process.env.API_URL,
        withCredentials: true,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json, text/plain, */*',
        },
      })
      return instance
        .get('/user')
        .then((response) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', response.data)
        })
        .catch(() => {
          commit('SET_AUTHENTICATED', false)
          commit('SET_USER', null)
        })
    },
  },
}

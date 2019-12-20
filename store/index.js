export const actions = {
  // eslint-disable-next-line require-await
  async nuxtServerInit ({ dispatch }) {
    dispatch('api/getApiData')
  }
}

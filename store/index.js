export const state = () => ({
  loading: false,
})

export const mutations = {
  TOGGLE_LOADING(state, loading) {
    state.loading = loading
  },
}

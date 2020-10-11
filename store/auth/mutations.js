export default {
  // SET_USER_DATA(state, userData) {
  //   state.user = userData
  // },
  SET_TOKEN(state, token) {
    state.token = token
  },
  CLEAR_DATA(state) {
    state.token = ''
    state.user = {}
    this.$axios.setHeader('Authorization', null)
    this.$router.push({ path: '/' })
  },
}

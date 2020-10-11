export default {
 async AUTHENTICATE({ commit }, { email, password }) {
    try {
      if(email.length && password.length){
      const {
        data: {token, user}
      } = await this.$axios.post('/client/auth/signin', {
        email,
        password,
      })

      this.$axios.setHeader('Authorization', `Bearer ${token.token}`)
      commit('SET_TOKEN', token.token)
      commit('SET_USER_DATA', user)
      this.$router.push('/home')

      // commit('TOGGLE_LOADING', false, { root: true })

      // setTimeout(() => {
      //   commit(
      //     'ui/SET_NOTIFICATION',
      //     { title: 'Sucesso!', message: 'Bem-vindo!' },
      //     { root: true }
      //   )
      // }, 1000)
      // Vue.notify({
      //   group: "success",
      //   status: 'success',
      //   title: 'Seja bem-vindo :)',
      //   text: 'O login foi realizado com sucesso.'
      // })
    }
    } catch (error) {
      commit('TOGGLE_LOADING', false, { root: true })
      // Vue.notify({
      //   group: "error",
      //   status: 'error',
      //   title: 'OPSS...',
      //   text: 'Não foi possível realizar o login.'
      // })
      console.log(error)
    }
  },

  async CREATE_USER(
    { commit },
    { firstName, lastName, email, password}
  ) {
    try {
    if(firstName.length && lastName.length && email.length && password.length) {
     console.log(email, firstName, lastName, password)

      commit('TOGGLE_LOADING', false, { root: true })
      // Vue.notify({
      //   status: 'success',
      //   title: 'Usuário criado com sucesso.',
      //   text: 'UHUUU... Seja bem-vindo.'
      // })
      
      await this.$axios.post('/client/auth/signon', {
        name: firstName,
        last: lastName,
        email,
        password
      })
    }
    } catch (error) {
      commit('TOGGLE_LOADING', false, { root: true })
      console.log(error)
    }
  },
}

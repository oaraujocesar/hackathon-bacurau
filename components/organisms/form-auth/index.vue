<template>
  <transition>
  <form class="form-login" @submit.prevent="submit(type)">
    <span v-if="type === 'create-account'" @click="type = 'login'" class="return-login">
      <img src="~@/assets/img/ic-arrow-back.svg" alt="go-back">
      Voltar
    </span>
    <Title :label="title" subtitle>
      {{subtitle}}
    </Title>
    <template v-if="type === 'login'">
      <Textfield
      v-model="login.email"
      label="E-mail"
      type="email"
      control-type="input"
      placeholder="exemplo@mail.com"
      />
      <Textfield
      v-model="login.password"
      label="Senha"
      type="password"
      control-type="input"
      placeholder="••••••" />
      <span v-if="type === 'login'" class="create-account" @click="type = 'create-account'">Criar nova conta</span>
    </template>
    <template v-else>
      <div class="name-wrapper">
        <Textfield
        v-model="signup.firstName"
        class="fname"
        label="Nome"
        type="text"
        control-type="input"
        placeholder="Wanderley" />
        <Textfield
        v-model="signup.lastName"
        label="Sobrenome"
        type="text"
        control-type="input"
        placeholder="Andrade" />
      </div>
      <Textfield
        v-model="signup.email"
        label="E-mail"
        type="email"
        control-type="input"
        placeholder="exemplo@mail.com" />
      <Textfield
      v-model="signup.password"
      label="Senha"
      type="password"
      control-type="input"
      placeholder="••••••" />
    </template>
    <Button type="submit" :label="buttonText" />
  </form>
  </transition>
</template>

<script>
export default {
  name: 'FormAuth',
  data: () => ({
    type: 'login',
    login: {
      email: '',
      password: '',
    },
    signup: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }),
  watch: {
    'this.$store.state.auth.status'(){
      this.type = 'login'
    }
  },
  methods: {
    async submit(context) {
      if (context === 'login') {
        this.$store.commit('TOGGLE_LOADING', true)
        this.$store.dispatch('auth/AUTHENTICATE', {
          email: this.login.email,
          password: this.login.password,
        })
      }
      if (context === 'create-account') {
        this.$store.commit('TOGGLE_LOADING', true)
        this.$store.dispatch('auth/CREATE_USER', {
          firstName: this.signup.firstName,
          lastName: this.signup.lastName,
          email: this.signup.email,
          password: this.signup.password,
        })
        this.clearData()
      }
    },
    clearData(){
      this.signup = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    }
  },
  computed: {
    title(){
      return this.type === 'login' ? 'Seja bem-vindo!' : 'Cadastro'
    },
    subtitle(){
      return this.type === 'login' ? 
      'Preencha as suas informações abaixo e vamos começar seu planejamento' : 'Preencha as suas informações abaixo para criar uma conta'
    },
    buttonText(){
      return this.type === 'login' ? 'entrar' : 'criar conta'
    },
  }
}
</script>

<style lang="scss" scoped>
.form-login {
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  position: relative;

  .return-login {
    @include paragraph(16, 500);
    display: flex;
    align-items: center;
    color: $color-secondary;
    top: -5px;
    position: absolute;

    img {
      margin-right: 5px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .name-wrapper {
    display: flex;
    width: 100%;
    .fname {
      margin-right: 15px;
    }
  }


  .create-account {
    @include paragraph(14, 400);
    text-decoration: underline;
    color: $color-secondary;
    align-self: flex-end;

    &:hover {
      cursor: pointer;
    }
  }

  > h2 {
    @include title();
    color: $color-primary;
  }

  > p {
    @include paragraph(16);
    color: #909090;
    margin: 22px 0 43px 0;
  }

  > Button {
    margin-top: 70px;
  }
}
</style>
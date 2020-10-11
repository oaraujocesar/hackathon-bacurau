<template>
  <div class="layout-container">
    <Sidebar :links="links" />
    <Nuxt />
  </div>
</template>

<script>
import localforage from 'localforage'
export default {
  async validate({ route, redirect, store }) {
    let response = await localforage
      .getItem("user-educamind")
      .then(response => JSON.parse(response));
    return !response.token.length &&
      route.path !== "/" 
      ? false
      : true;
  },
  data: () => ({
    links: [
      {
        path: '/home/educacional',
        icon: 'ic-mind-health',
      },
      {
        path: '/home/integral',
        icon: 'ic-health',
      },
      {
        path: '/home/social',
        icon: 'ic-people',
      },
      {
        path: '/home/profissional',
        icon: 'ic-progress',
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  > .main {
    width: 100%;
    height: 100%;
    padding-left: 60px;
    background: #F5F4F4 url('~@/assets/img/home-bg.svg') no-repeat;
    background-size: cover;
    background-position: left 45vw center;

    > nav {
      height: 100px;
      background: $color-primary;
    }
  }

  > .notifications {
    cursor: pointer;
    margin: 20px 0;
    > .notification-title {
      @include paragraph(18);
      font-weight: 700;
      text-transform: uppercase;
    }

    .notification-content {
      @include paragraph(14);
    }
  }
}
</style>
<template>
  <nav class="sidebar">
    <Menu :links="links" />
    <div class="logout">
        <div class="icon-menu">
          <img src="~@/assets/img/ic-member.svg" alt="logout">
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // logout(){
    //   this.$store.commit('auth/CLEAR_DATA')
    // }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  height: 100%;
  background: $color-blue;
  transition: width 0.3s ease-in-out;


  > .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 0 9px 0;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    background: $color-secondary;
    cursor: pointer;
    margin: 0 auto 15px;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 69px;
      height: 3px;
      background: #fff;
      display: block;
      top: -20px;
    }
  }
}
</style>
<style lang="scss">
.sidebar {
  > .logout {
    > .logout-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        max-width: 26px;
        width: 100%;
      }
      span {
        margin: 5px 0 0 0;
        @include paragraph(12, 500);
        color: #fff;
      }
    }
  }

  .active {
    background:$color-blue;
  }

  > .logo {
    padding: 20px 0 20px 25px;
  }

  path.icon-label {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
}
</style>
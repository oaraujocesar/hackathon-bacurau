<template>
  <ul class="menu">
    <li v-for="(link, index) in links" :key="index">
      <nuxt-link :to="link.path">
        <div class="icon-menu">
          <img :src="require(`../../../assets/img/${link.icon}.svg`)" :alt="link.label">
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  padding: 20px 0 20px 15px;
  transition: width 1s ease-in-out;

  li {
    width: 95px;
    margin: 25px 0;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.1s linear;
    a {
      display: inline-flex;
      align-items: center;

      > .icon-menu {
        height: 65px;
        width: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: $color-secondary;
        transition: all .3s ease-in-out;

        &:hover {
          border-radius: 30%;
        }
      }

      span {
        display: none;
        margin-left: 9px;
        @include menuLink;
        color: $color-white;
        opacity: 0.4;
      }
    }
  }
}
</style>
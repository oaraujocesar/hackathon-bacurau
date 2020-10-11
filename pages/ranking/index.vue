<template>
  <div class="main">
    <Title internal label="Ranking" />

    <div class="wrapper">
      <div class="ranking">
        <PodiumItem :index="1" />
        <PodiumItem :index="2" />
        <PodiumItem :index="3" />
        <PodiumItem :index="4" />
        <PodiumItem :index="5" />
        <PodiumItem :index="6" />
        <PodiumItem :index="7" />
        <PodiumItem :index="8" />
        <PodiumItem :index="9" />
        <PodiumItem :index="10" />
      </div>

      <div class="trophy">
        <img src="~assets/img/ic-trophy.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 40px;

  .wrapper {
    position: relative;
    .trophy {
      position: absolute;
      right: 11%;
      top: 5%;
    }
  }
}
</style>

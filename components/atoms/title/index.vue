<template>
  <section class="title">
    <h1 class="title">{{label}}</h1>
    <div class="subtitle-wrapper">
      <h3 v-if="subtitle" class="subtitle">
        <slot></slot>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    subtitle: {
      type: Boolean,
      default: () => false,
    }
  }

}
</script>

<style lang="scss" scoped>
  .title {
    @include title;
    color: $color-primary;
  }

  .subtitle-wrapper {
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .subtitle {
    @include paragraph(16);
    color: $subtitle-grey;
  }
</style>
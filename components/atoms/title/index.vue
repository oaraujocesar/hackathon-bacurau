<template>
  <section class="title">
    <h1 class="title" :style="{fontSize: internal ? '3.75rem' : '2.2rem'}">{{label}}</h1>
    <div v-if="subtitle" class="subtitle-wrapper">
      <h3 class="subtitle">
        <slot></slot>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Title',
  props: {
    label: {
      type: String,
      default: () => ''
    },
    subtitle: {
      type: Boolean,
      default: () => false,
    },
    internal: {
      type: Boolean,
      default: () => false,
    }
  }

}
</script>

<style lang="scss" scoped>
  .title {
    font-weight: 700;
    color: $color-blue;
    line-height: 1.23;
    font-family: "Roboto";
    letter-spacing: -1.5px;
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
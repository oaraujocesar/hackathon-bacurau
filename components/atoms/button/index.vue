<template>
  <button v-bind="$attrs" @click="$emit('click')">
    <span class="label">
      <slot v-if="!$attrs.loading">{{label}}</slot>
        <pulse-loader
        v-else
        :loading="$attrs.loading"
        color="#fff"
        size="10px"
      ></pulse-loader>
    </span>
  </button>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Button',
  components: {
    PulseLoader,
  },
  props: {
    label: {
      type: String,
      default: () => '',
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 12px 20px;
  background: $color-secondary;
  border: 1px solid transparent;
  border-radius: 12px;
  @include buttonText();
  text-transform: uppercase;
  color: $color-white;
  cursor: pointer;
  transition: all .5s ease-in-out;

  &:hover {
    background: $color-secondary-hover;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: rgba($color: $color-primary, $alpha: .5);
    cursor: not-allowed;
  }
}
</style>
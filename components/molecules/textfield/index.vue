<template>
  <fieldset>
    <label v-if="label">
      {{label}}<span v-show="required" class="required"> * </span> 
    </label>
    <Input
    v-bind="$attrs"
    @input="$emit('input', $event)"
    @blur="$emit('blur', $event)"
    @send="$emit('send')"
    @newline="$emit('newline')"
    @keypress="$emit('keypress', $event)"
    />
  </fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => '',
    },
    error: {
      type: String,
      default: () => '',
    },
    required: {
      type: Boolean,
      default: () => false,
    }
  }
}
</script>

<style lang="scss" scoped>
fieldset {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  > small {
    width: 100%;
    margin-top: 10px;
    position: absolute;
    left: 0;
    bottom: -25px;
    @include paragraph(12);
    text-align: left;
    /* color: $color-error; */
  }

  > label {
    display: block;
    margin-bottom: 8px;
    @include paragraph(14);
    text-align: left;
    color: $color-primary;
  }

  span.required {
    @include paragraph(14);
    text-align: left;
    /* color: $color-error; */
  }
}
</style>
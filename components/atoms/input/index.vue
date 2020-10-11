<template>
  <section class="input">
    <input
    v-if="controlType === 'input'"
    :type="hidePasswordToggle"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    >
    <textarea 
    v-if="controlType === 'textarea'"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    @keypress="$emit('keypress', $event)"
    @keydown.enter.exact.prevent
    @keyup.enter.exact="$emit('send')"
    @keydown.enter.shift.exact="$emit('newline')"
    >
    </textarea>

    <div
    v-if="$attrs.type === 'password'"
    class="hide-icon"
    @click="visible = !visible">
    <svg
        id="hide-password-toggle"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          stroke="#CECECE"
          stroke-width="2"
          d="M3.505 13.314l2.5 2.222c4.168 3.705 10.449 3.705 14.617 0l2.5-2.222-2.5-2.223c-4.168-3.705-10.449-3.705-14.616 0l-2.5 2.223z"
        />
        <path
          stroke="#CECECE"
          stroke-linecap="round"
          stroke-width="2"
          d="M22.5 6.5L4.5 19.5"
          :class="{ lock: visible }"
        />
        <path
          :fill="visible ? 'transparent' : '#FFF'"
          d="M18.961 7.852L5.427 17.67 4.5 16.353 18.01 6.5z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      controlType: {
        type: String,
        default: () => 'input',
      }
    },
    data: () => ({
      visible: false,
    }),
    computed: {
      hidePasswordToggle(){
        if(this.$attrs.type !== 'password'){
          return this.$attrs.type
        } else {
          return this.$attrs.type === 'password' && this.visible ? 'text' : 'password'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  padding: 0;

  input[autocomplete='off']::-webkit-contacts-auto-fill-button,
  input[autocomplete='off']::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    height: 0;
    width: 0;
    margin: 0;
  }

  > input {
    padding: 12px 20px;
    border: 1px solid #cecece;
    border-radius: 15px;
    @include paragraph(16);
    /* color: $color-dark-text; */

    &::placeholder {
      color: #e0e0e0;
    }

    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }
  }

  > input,
  > textarea {
    width: 100%;
  }

  > textarea {
    height: auto;
  }

  .hide-icon {
    display: flex;
    align-items: center;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  #hide-password-toggle > .lock {
    d: path('M22.5 6.5L22.5 6.5');
    transition: d 200ms linear, opacity 200ms 200ms linear;
    opacity: 0;
  }

  #hide-password-toggle path {
    transition: d 200ms linear;
  }
}
</style>
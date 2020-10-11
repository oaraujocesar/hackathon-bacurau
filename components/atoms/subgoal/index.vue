<template>
  <div class="task">
    <label :for="'id-' + id">
      <input type="checkbox" :checked="concluded" :name="id" :id="'id-' + id" />
      <p :style="concluded ? 'color: #909090; text-decoration: line-through;' : null">Texto em branco, no caderno de maria</p>
    </label>
    <div class="control">
      <span :style="concluded ? 'color: #167070' : null" @click="!concluded ? conclude() : null">{{ controlText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    concluded: {
      type: Boolean,
      default: () => false,
    },
    id: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    controlText() {
      return this.concluded ? 'Concluído' : 'Remover'
    },
  },
  methods: {
    conclude() {
      console.log('concluir')
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  margin-bottom: 15px;
  label {
    display: flex;
    align-items: baseline;
    @include paragraph(16, 500);
    color: $color-blue;

    input {
      margin-right: 5px;
    }
  }

  .control {
    cursor: pointer;

    span {
      margin-left: 16px;
      @include paragraph(16, 500);
      color: #ff0000;

      &:hover {
        color: #ca1010;
      }
    }
  }
}
</style>

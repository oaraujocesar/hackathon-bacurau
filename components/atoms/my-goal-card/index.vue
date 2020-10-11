<template>
  <section class="my-goal">
    <div class="header">
      <h3 @click="goToInternalPage">Emagrecer 10kg em 10 dias</h3>
      <div class="controls">
        <span>
          <img src="~/assets/img/ic-edit.svg" alt="" />
        </span>
        <span>
          <img src="~/assets/img/ic-delete.svg" alt="" />
        </span>
      </div>
    </div>
    <div class="tags">
      <span class="tag">#saúde</span>
      <span class="tag">#emagrecimento</span>
      <span class="tag">#vida</span>
    </div>
    <div class="description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        auctor urna vel eros blandit viverra. Integer sodales placerat dictum.
        Cras a augue in lorem aliquam cursus. Pellentesque luctus eros eget quam
        maximus porttitor.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyGoalCard',
  methods: {
    goToInternalPage() {
      this.$router.push('/home/educacional/1')
    }
  }
}
</script>

<style scoped lang="scss">
.my-goal {
  background: $color-green-light;
  padding: 16px 19px;
  border-radius: 10px;
  margin-bottom: 20px;

  .header {
    @include center-v;
    justify-content: space-between;

    h3 {
      @include paragraph(35, 700);
      letter-spacing: -1.3px;
      color: #dedede;
      line-height: 1;
      margin-bottom: 8px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
    .controls {
      @include center-v;
      span {
        display: block;
        width: 24px;
        height: 24px;
        margin-left: 15px;
        cursor: pointer;

        img {
          max-width: 100%;
          height: auto;
        }

        &:hover {
          opacity: .8;
        }
      }
    }
  }

  .tags {
    span {
      @include paragraph(15, 500);
      color: #dedede;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .description {
    margin-top: 8px;
    @include paragraph(15, 500);
    color: $color-blue;
  }
}
</style>

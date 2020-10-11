<template>
  <div class="main">
    <Title internal label="Saúde Educacional" />

    <div class="wrapper">
      <section class="my-goals-container">
        <modal width="400" height="auto" styles="border-radius: 15px; text-align: center;" name="my-first-modal">
          <client-only>
          <div class="modal-header">
            <h2>Nova meta</h2>
          </div>
          <div class="modal-body">
            <input type="text" placeholder="Título">
            <input type="text" placeholder="Tags #obesidade,#emagrecimento,#motivacao">
            <Textfield label="" control-type="textarea" placeholder="descrição" />
            <label for="public">
              <input type="checkbox" name="public" id="public">
              Público
            </label>
          </div>
          <div class="modal-footer">
            <span @click="hide">Cancelar</span>

            <div class="modal-btn">
              <Button label="Salvar" />
            </div>
          </div>
          </client-only>
        </modal>
        <div class="my-goals-wrapper">
          <MyGoalCard />
          <MyGoalCard />
          <MyGoalCard />
          <MyGoalCard />
          <MyGoalCard />
        </div>
        <div class="btn-wrapper">
          <Button @click="show()" label="Nova meta" />
        </div>
      </section>
      <section class="public-goals-container">
        <div class="header">
          <h3>Metas relacionadas</h3>
          <div class="searchbar-wrapper">
            <Textfield label="" placeholder="Buscar metas" />
            <img src="~assets/img/ic-search.svg" alt="" />
          </div>
        </div>
        <div class="public-goals-list">
          <PublicGoalCard
          v-for="(publicGoal, index) in publics"
          :index="'modal-'+index"
          :key="index"
          username="Wanderley Andrade"
          imgPath="https://api.adorable.io/avatars/285/silvasantospedro91@gmail.comas.png"
          level="22"
          :progress="30" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  head() {
    return {
      title: 'EducaMind | Saúde Educacional',
    }
  },
  data: () => ({
    publics: 5
  }),
  methods: {
    show() {
      this.$modal.show('my-first-modal')
    },
    hide() {
      this.$modal.hide('my-first-modal')
    },
  },
}
</script>

<style scoped lang="scss">
.main {
  padding-top: 38px;
  height: 100%;

  > .wrapper {
    margin-top: 20px;
    @include center-v;
    height: 90%;

    > .my-goals-container {
      padding: 38px 5px 38px 38px;
      background: $color-blue;
      height: 95%;
      width: 47%;
      border-radius: 30px 0 0 30px;

      .modal-header {
        margin-top: 10px;
        h2 {
          @include paragraph(40, 700);
          color: $color-blue;
          text-align: center;
        }
      }

      .modal-body {
        display: flex;
        flex-direction: column;
        padding: 20px 40px 20px;
        align-items: flex-start;

        input:not([type='checkbox']) {
          width: 100%;
          border: none;
          border-bottom: 1px solid #909090;
          margin-bottom: 20px;
          flex-shrink: 0;
          @include paragraph(14);
        }

        label {
          @include paragraph(14);
          color: #909090;
        }
      }

      .modal-footer {
        @include center-v;
        justify-content: space-around;
        padding-bottom: 15px;

        span {
          @include paragraph(14, 500);
          color: $color-blue;
          cursor: pointer;
        }
      }

      > .my-goals-wrapper {
        height: 90%;
        overflow-y: auto;
        padding-right: 20px;
        margin-bottom: 20px;

        @include scrollbar;
      }

      > .btn-wrapper {
        padding-right: 27px;
      }
    }

    > .public-goals-container {
      background: #fff;
      height: 95%;
      width: 47%;
      border-radius: 0 30px 30px 0;
      padding: 40px 80px;

      .public-goals-list {
        width: 100%;
        height: 80%;
        overflow-y: auto;

        @include scrollbar($color-blue, $color-white);
        margin-top: 40px;
      }

      .header {
        @include center-v;
        justify-content: space-between;

        h3 {
          @include paragraph(45, 700);
          color: $color-blue;
          letter-spacing: -1.3;
        }

        .searchbar-wrapper {
          position: relative;

          img {
            position: absolute;
            right: 3px;
            bottom: 8px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.public-goals-container {
  .header {
    fieldset {
      margin: 0;
    }

    .input input {
      background: none;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid #909090;
      padding: 0 20px 5px 0;

      &::placeholder {
        color: #909090;
        font-style: italic;
      }
    }
  }

}

.my-goals-container {

  .modal-body {
    .input textarea {
      padding: 5px 10px;
      border-color: #909090;
      border-radius: 5px;
      height: 150px;
      resize: none;
       @include paragraph(14);
      }
    }
}
</style>

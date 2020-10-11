<template>
  <div class="main">
    <Title internal label="Saúde Integral" />

    <div class="wrapper">
      <section class="my-goals-container">
        <modal width="400" height="auto" styles="border-radius: 15px; text-align: center;" name="my-first-modal">
          <client-only>
          <div class="modal-header">
            <h2>Nova meta</h2>
          </div>
          <div class="modal-body">
            <input type="text" v-model="newGoal.title" placeholder="Título">
            <input type="text" v-model="newGoal.tags" placeholder="Tags #obesidade,#emagrecimento,#motivacao">
            <Textfield label="" v-model="newGoal.description" control-type="textarea" placeholder="descrição" />
            <label for="public">
              <input type="checkbox"  v-model="newGoal.public" name="public" id="public">
              Público
            </label>
          </div>
          <div class="modal-footer">
            <span @click="hide">Cancelar</span>

            <div class="modal-btn">
              <Button label="Salvar" @click="addnewGoal"/>
            </div>
          </div>
          </client-only>
        </modal>
        <div class="my-goals-wrapper">
          <div v-if="goalCards.length">
            <MyGoalCard 
              v-for="({title, tags, description}, index) in goalCards" 
              :key="'my-goal-' + index"
              :title="title"
              :tags="tags"
              :description="description"
              />
          </div>
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
          v-for="({username, avatar, level, title, description, tags, progress, comments}, index) in publicGoalCards"
          :index="'modal-'+index"
          :key="index"
          :username="username"
          :imgPath="avatar"
          :level="level"
          :title="title"
          :description="description"
          :tags="tags"
          :progress="progress"
          :comments="comments"
          @send-comment="(value) => handleComment(publicGoalCards[index], index, value)"
          />
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
    goalCards: [
      {
        title: "Aprender Flutter",
        tags: ['#programação', '#tecnologia', '#aprendizado'],
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus erat quis sem finibus ultricies. Sed nisi elit, sollicitudin sed urna in, volutpat mattis ligula. Phasellus efficitur faucibus odio sed pretium. Vestibulum commodo et massa sit amet commodo.'
      },
      {
        title: "Finalizar a graduação",
        tags: ['#universidade', '#graduação', '#aprendizado'],
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus erat quis sem finibus ultricies. Sed nisi elit, sollicitudin sed urna in, volutpat mattis ligula. Phasellus efficitur faucibus odio sed pretium. Vestibulum commodo et massa sit amet commodo.'
      },
      {
        title: "Aprender Alemão",
        tags: ['#cultura', '#linguas', '#aprendizado'],
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus erat quis sem finibus ultricies. Sed nisi elit, sollicitudin sed urna in, volutpat mattis ligula. Phasellus efficitur faucibus odio sed pretium. Vestibulum commodo et massa sit amet commodo.'
      },
    ],
    publicGoalCards: [
      {
        username: 'Evandro Luís',
        level: '33',
        avatar: 'https://api.adorable.io/avatars/285/evanderholliday@gmail.comas.png',
        title: "Finalizar a graduação",
        tags: ['#programação', '#tecnologia', '#aprendizado'],
        progress: 75,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus erat quis sem finibus ultricies. Sed nisi elit, sollicitudin sed urna in, volutpat mattis ligula. Phasellus efficitur faucibus odio sed pretium. Vestibulum commodo et massa sit amet commodo.',
        comments: [
          {
            username: 'Pedro Silva',
            avatar: 'https://api.adorable.io/avatars/285/peueueu@gmail.com.png',
            createdAt: '20/05/2020 - 20:20',
            content: 'Força na sua caminhada amigo :)',
          }
        ]
      },
      {
        username: 'César Araújo',
        level: '80',
        avatar: 'https://api.adorable.io/avatars/285/oaraujocesar@gmail.com.png',
        title: "Aprender Flutter",
        tags: ['#programação', '#tecnologia', '#aprendizado'],
        progress: 95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus erat quis sem finibus ultricies. Sed nisi elit, sollicitudin sed urna in, volutpat mattis ligula. Phasellus efficitur faucibus odio sed pretium. Vestibulum commodo et massa sit amet commodo.',
        comments: [
          {
            username: 'Pedro Silva',
            avatar: 'https://api.adorable.io/avatars/285/peueueu@gmail.com.png',
            createdAt: '20/05/2020 - 20:20',
            content: 'Força na sua caminhada amigo, tenho fé que irás concluir rapidamente! :)',
          }
        ]
      },
    ],

    newGoal: {
      title: '',
      tags: [],
      description: '',
      public: false
    },

    newComment: '',
  }),
  methods: {
    show() {
      this.$modal.show('my-first-modal')
    },
    hide() {
      this.$modal.hide('my-first-modal')
    },

    addnewGoal() {
      if (!this.newGoal.public) {
        console.log(this.newGoal)
        const tags = this.newGoal.tags.split(',')
        this.goalCards = [...this.goalCards, { 
          title: this.newGoal.title,
          tags, 
          description: this.newGoal.description  
          }]
      } else {
        const tags = this.newGoal.tags.split(',')
        this.publicGoalCards = [...this.publicGoalCards, {
              username: 'César Araújo',
              level: '80',
              avatar: 'https://api.adorable.io/avatars/285/oaraujocesar@gmail.com.png',
              title: this.newGoal.title,
              progress: 95,
              tags,
              description: this.newGoal.description,
              comments: []
        }]
        
      }
    },
    handleComment(goal, index, value){
      const rawDate = new Date()
      goal.comments.push({
        username: 'Pedro Silva',
        avatar: 'https://api.adorable.io/avatars/285/peueueu@gmail.com.png',
        createdAt: `${rawDate.toLocaleDateString('pt-br')} - ${rawDate.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'})}`,
        content: value,
      })
    }
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

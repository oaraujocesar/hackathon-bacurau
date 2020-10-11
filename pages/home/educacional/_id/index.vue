<template>
  <div class="main">
    <Title internal :label="goal.title" />

    <div class="gen">
      <PublicGoalCard
        username="Breno Machado"
        imgPath="https://api.adorable.io/avatars/285/brenobioriful@gmail.com.png"
        level="13"
        :progress="30"
        :tags="goal.tags"
        :description="goal.description"
        vertical
        goalInterna
      />

      <div class="new-subgoal">
        <h4>Nova tarefa</h4>

        <label>
          <input type="radio" value="curto" v-model="estimative" name="radio-goal" id="" />
          Curto prazo
        </label>
        <label>
          <input type="radio" value="medio" v-model="estimative" name="radio-goal" id="" />
          Médio prazo
        </label>
        <label>
          <input type="radio" value="longo" v-model="estimative" name="radio-goal" id="" />
          Longo prazo
        </label>

        <div class="subgoaltxt">
          <input
            type="text"
            name="subitem"
            v-model="taskname"
            id=""
            placeholder="Nome da tarefa"
          />
          <div class="btn-wrapper">
            <Button @click="sendTask" label="Adicionar" />
          </div>
        </div>
      </div>
    </div>

    <div class="todo">
      <div class="board">
        <h4>Curto prazo</h4>
        <div class="task-list">
          <div v-for="{id, taskname, estimative} in subGoals" :key="id">
          <Subgoal v-if="estimative === 'curto'" :id="id" :text="taskname" />
          </div>
        </div>
      </div>
      <div class="board">
        <h4>Médio prazo</h4>
        <div class="task-list">
        <div v-for="{id, taskname, estimative} in subGoals" :key="id">
          <Subgoal v-if="estimative === 'medio'" :id="id" :text="taskname" />
          </div>
        </div>
      </div>
      <div class="board">
        <h4>Longo prazo</h4>
        <div class="task-list">
        <div v-for="{id, taskname, estimative} in subGoals" :key="id">
          <Subgoal v-if="estimative === 'longo'" :id="id" :text="taskname" />
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data: () => ({
    estimative: '',
    taskname: '',
    subGoals: [
    ]
  }),
  methods: {
    sendTask() {
      this.subGoals = [...this.subGoals, {
        id: `subgoal-${Math.floor(Math.random() * 2418721)}`,
        estimative: this.estimative,
        taskname: this.taskname,
      }]
    }
  },
  computed: {
    goal(){
      return this.$store.state.educacional.goal
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  padding-top: 40px;
  position: relative;

  .gen {
    margin-top: 5%;
    max-width: 40%;

    .new-subgoal {
      h4 {
        @include paragraph(25, 500);
        color: $color-blue;
        margin-bottom: 15px;
      }

      label {
        @include paragraph(18, 500);
        color: $color-blue;
        margin-right: 50px;
      }

      .subgoaltxt {
        margin-top: 20px;
        @include center-v;

        input {
          background: none;
          width: 80%;
          margin-right: 20px;
          border: none;
          border-bottom: 1px solid #909090;
          @include paragraph(18);
          padding-bottom: 5px;
        }
      }
    }
  }

  .todo {
    position: absolute;
    right: 0;
    top: 8%;
    @include center-v;

    .board {
      background: #fff;
      height: 670px;
      width: 245px;
      margin: 0 25px;
      border-radius: 15px;
      padding: 30px 15px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);

      h4 {
        @include paragraph(25, 700);
        color: $color-blue;
        text-align: center;
        margin-bottom: 20px;
      }
      .task-list {
        overflow-y: auto;
        @include scrollbar($color-blue, '#FFF');
        height: 90%;
      }
    }
  }
}
</style>

<style lang="scss">
.gen {
  .avatar-wrapper {
    justify-content: flex-start !important;
    .avatar {
      align-self: flex-start;
      width: 150px !important;
      height: 150px !important;
      border-width: 6px !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;

      .userlevel {
        border-width: 6px !important;
        width: 49px !important;
        height: 49px !important;
        .userlevel-lbl {
          font-size: 20px !important;
          font-weight: 700 !important;
        }
      }
    }

    .username {
      margin-top: 5px !important;
      font-size: 22px !important;
      font-weight: 700 !important;
      color: $color-blue !important;
    }

    .progress-wrapper {
      width: 100% !important;
    }
  }

  .card-content {
    margin-top: 80px !important;
  }
}
</style>

<template>
  <section class="public-goal" :style="{flexDirection: vertical ? 'column' : 'row', alignItems: vertical ? 'flex-start' : '', justifyContent: vertical ? 'flex-start' : ''}">
    <div class="avatar" :style="{marginBottom: vertical ? '60px' : ''}">
      <Avatar :imgPath="imgPath" :username="username" :level="level" :progress="progress"/>
    </div>
    <div class="card-content">
      <div class="header">
        <h3>Emagrecer 10kg em 10 dias</h3>
        <span class="star" v-if="!goalInterna">
          <svg xmlns="http://www.w3.org/2000/svg" width="25.994" height="25.971" viewBox="0 0 25.994 25.971">
          <g id="starred" transform="translate(-583 145.977)">
            <g id="Grupo_15" data-name="Grupo 15" transform="translate(583 -146)">
              <path id="Caminho_53" data-name="Caminho 53" d="M20.7,25.993a.549.549,0,0,1-.262-.067L13,21.816,5.561,25.926a.542.542,0,0,1-.8-.561L6.19,16.622.154,10.433A.541.541,0,0,1,.459,9.52L8.781,8.248,12.507.309a.563.563,0,0,1,.98,0l3.726,7.939L25.535,9.52a.541.541,0,0,1,.305.913L19.8,16.621l1.426,8.743a.54.54,0,0,1-.223.53.531.531,0,0,1-.311.1ZM13,20.655a.549.549,0,0,1,.262.067l6.723,3.716-1.291-7.912a.544.544,0,0,1,.147-.466l5.491-5.629L16.766,9.275a.541.541,0,0,1-.408-.305L13,1.815,9.639,8.971a.537.537,0,0,1-.408.3L1.666,10.431,7.157,16.06a.544.544,0,0,1,.147.466L6.014,24.438l6.723-3.716A.541.541,0,0,1,13,20.655Z" fill="#fe6625"/>
            </g>
          </g>
        </svg>
        </span>
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
      <div class="controlls" v-if="!goalInterna">
        <Button label="Comentar" class="comment-btn" @click="show"/>
      </div>
    </div>

      <modal v-if="!goalInterna" width="800" class="modal" height="auto" styles="border-radius: 15px; text-align: center; padding: 84px 60px 72px 60px" :name="index">
        <client-only>
          <div class="modal-header">
               <div class="avatar">
          <Avatar :imgPath="imgPath" :username="username" :level="level" :progress="progress" />
          </div>
        <div class="card-content">
          <div class="header">
            <h3>Emagrecer 10kg em 10 dias</h3>
            <span class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.994" height="25.971" viewBox="0 0 25.994 25.971">
              <g id="starred" transform="translate(-583 145.977)">
                <g id="Grupo_15" data-name="Grupo 15" transform="translate(583 -146)">
                  <path id="Caminho_53" data-name="Caminho 53" d="M20.7,25.993a.549.549,0,0,1-.262-.067L13,21.816,5.561,25.926a.542.542,0,0,1-.8-.561L6.19,16.622.154,10.433A.541.541,0,0,1,.459,9.52L8.781,8.248,12.507.309a.563.563,0,0,1,.98,0l3.726,7.939L25.535,9.52a.541.541,0,0,1,.305.913L19.8,16.621l1.426,8.743a.54.54,0,0,1-.223.53.531.531,0,0,1-.311.1ZM13,20.655a.549.549,0,0,1,.262.067l6.723,3.716-1.291-7.912a.544.544,0,0,1,.147-.466l5.491-5.629L16.766,9.275a.541.541,0,0,1-.408-.305L13,1.815,9.639,8.971a.537.537,0,0,1-.408.3L1.666,10.431,7.157,16.06a.544.544,0,0,1,.147.466L6.014,24.438l6.723-3.716A.541.541,0,0,1,13,20.655Z" fill="#fe6625"/>
                </g>
              </g>
            </svg>
            </span>
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
        </div>
       </div>
        <div class="separator"></div>
        <div class="modal-body">
          <Comment
          username="Evandro Hollywood"
          commentAvatar="https://api.adorable.io/avatars/285/evandroHollifild@adorable.io.png"
          commentInfo="22/02/2020 - 20:20" 
          commentContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor urna vel eros blandit viverra."
          />
        </div>
      </client-only>
      </modal>
  </section>
</template>

<script>
export default {
  name: 'PublicGoalCard',
  props: {
    username: {
      type: String,
      default: () => '',
    },
    level: {
      type: String,
      default: () => '01',
    },
    imgPath: {
      type: String,
      default: () => '',
    },
    progress: {
      type: Number,
      default: () => 0,
    },
    index: {
      type: String,
      default: () => '',
    },
    goalInterna: {
      type: Boolean,
      default: () => false,
    },
    vertical: {
      type: Boolean,
      default: () => false,
    }
  },
    methods: {
    show() {
      this.$modal.show(this.index)
    },
    hide() {
      this.$modal.hide(this.index)
    },
  },
}
</script>

<style lang="scss" scoped>
.public-goal {
  display: flex;
  margin-bottom: 30px;

    .card-content {
      .header {
        display: flex;
        align-items: center;
        h3 {
          @include paragraph(40, 700);
          color: #003D59;
          letter-spacing: -2.4px;
          margin-right: 15px;
        }
      }
    }

    .controlls {
      width: 124px;
    }

    .avatar {
      max-height: 80px;
      margin-right: 15px;
    }

    .description {
      @include paragraph(16);
      margin-top: 15px;
      color: #003D59;
    }

    .tags {
      .tag {
        @include paragraph(15, 500);
        color: #707070;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

    
.modal{

  .separator {
    position: absolute;
    width: 100%;
    background: #707070;
    opacity: .4;
    height: 1px;
    left: 0;
    margin: 25px 0;
  }

  .modal-body {
    margin-top: 30px;
  }

  .modal-header {
    display: flex;
  }

  .tags {
    text-align: left;
    .tag {
      font-weight: 700;
    }
  }
  }
</style>
<style lang="scss">
.public-goal {
  .card-content {
    .controlls {
      .comment-btn {
        margin-top: 20px;
        max-width: 124px;
        padding: 8px 20px;
        letter-spacing: 0;
      }
    } 
  }
}
</style>
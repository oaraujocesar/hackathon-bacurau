<template>
  <section class="avatar-wrapper">
    <div class="avatar" :style="{background: 'url(' + imgPath + ')', backgroundSize: '80px'}">
    <div class="userlevel">
      <span class="userlevel-lbl">{{level}}</span>
      </div>
    </div>
    <span class="username">{{username}}</span>
    <div class="progress-wrapper">
      <div class="progress" :style="{height: '100%', width: progress + '%'}"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    username: {
      type: String,
      default: () => '',
    },
    imgPath: {
      type: String,
      default: () => '',
    },
    level: {
      type: String,
      default: () => '01',
    },
    progress: {
      type: Number,
      default: () => 0,
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .avatar {
      background-size: 80px;
      height: 80px;
      width: 80px;
      background-size: contain;
      border-radius: 50%;
      border: 3px solid $color-secondary;
      position: relative;

      .userlevel {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -2px;
        right: -3px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        border: 3px solid $color-secondary;
        background: $color-white;

        .userlevel-lbl {
          @include paragraph(14, 600);
          color: $color-primary;
        }
      }
  }

    .username {
      margin-top: 20px;
      @include paragraph(15);
      color: $color-primary;
    }

    .progress-wrapper {
      height: 9px;
      border-radius: 4px;
      margin-top: 10px;
      width: 130px;
      background: #c7c7c7;
      position: relative;

      .progress {
        background: $color-primary;
        border-radius: 4px;
        transition: all .3s ease;
      }
    }
  }
</style>
<template>
  <div  class="podium">
    <div :style="index > 4 ? 'margin-top: 10px;' : null" class="item">
      <h1 :style="numberSize">#{{ index }}</h1>
      <div v-if="index <= 3" :style="avatarWidth" class="avatar-wrapper">
        <div :style="levelStyle" class="level">20</div>
      </div>
      <span :style="nameStyle">Breno Machado {{ index > 3 ? '- Lvl 20' : null}}</span>
    </div>
  </div>
</template>

<script>
export default {
props: {
  index: {
    type: Number,
    default: () => 0
  }
},
computed: {
  numberSize() {
    let size
    if(this.index === 2) {
      size = 'font-size: 67px'
    }
    if(this.index === 3) {
      size = 'font-size: 50px'
    }
    if(this.index > 3) {
      size = 'font-size: 18px; min-width: 60px;'
    }

    return size
  },
  avatarWidth() {
    let size

    if(this.index === 2) {
      size = 'width: 125px; height: 125px; border-color: #C0C0C0;'
    }
    if(this.index === 3) {
      size = 'width: 95px; height: 95px; border-color: #CD7F32;'
    }

    return size
  },
  levelStyle() {
    let style

    if(this.index === 2) {
      style = 'bottom: -12px; border-color: #C0C0C0;'
    }
    if(this.index === 3) {
      style = 'bottom: -18px; right: 0; border-color: #CD7F32;'
    }
    

    return style
  },
  nameStyle() {
    let style

    if(this.index === 2) {
      style = 'font-size: 25px;'
    }
    if(this.index === 3) {
      style = 'font-size: 20px;'
    }
    if(this.index > 3) {
      style = 'font-size: 18px;'
    }

    return style
  }
}
}
</script>

<style scoped lang="scss">
  .podium {
    .item {
      margin-top: 30px;
      @include center-v;

      h1 {
        @include paragraph(95, 700);
        color: $color-blue;
      }

      span {
        @include paragraph(30, 700);
        color: $color-blue;
      }

      .avatar-wrapper {
        margin: 0 10px 0 10px;
        width: 155px;
        height: 155px;
        border-radius: 50%;
        border: 6px solid #FFD700;

        position: relative;

        .level {
          position: absolute;
          bottom: -8px;
          right: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #FFF;
          border: 6px solid #FFD700;
          @include center-v;
          justify-content: center;

          @include paragraph(25, 700);
          color: $color-blue;
        }
      }
    }
  }
</style>
<template>
  <section class="comment">
    <div class="user-info-wrapper">
      <div class="user-info" :style="{background: 'url(' + commentAvatar + ') no-repeat center center', backgroundSize: '70px'}">
      </div>
      <div class="user-data">
        <h4 class="username">{{username}}</h4>
        <span class="comment-info">{{commentInfo}}</span>
      </div>
    </div>
    <div class="commentContent">
      <span>{{commentContent}}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    commentAvatar: {
      type: String,
      default: () => '',
    },
    username: {
      type: String,
      default: () => '',
    },
    commentInfo: {
      type: String,
      default: () => '',
    },
    commentContent: {
      type: String,
      default: () => '',
    },
  }
}
</script>

<style lang="scss" scoped>
  .comment {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    
    .user-info-wrapper {
      display: flex;
      align-items: center;
      width: 320px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 60px;
        width: 1px;
        background: #707070;
        opacity: .5;
        right: 55px;
      }
    }
    .user-data {
      display: flex;
      flex-direction: column;
    }

    .user-info {
      border: 3px solid $color-blue;
      border-radius: 50%;
      /* padding: 30px; */
      height: 60px;
      width: 60px;
      margin-right: 15px;
      background-size: contain;
    }

    .username {
      color: $color-blue;
      @include paragraph(16, 700);
      letter-spacing: -1.2px;
    }

    .comment-info {
      color: $color-blue;
      @include paragraph(14);
      letter-spacing: -0.9px;
      text-align: left;
    }

    .commentContent {
      @include paragraph(15);
      color: $color-primary;
      text-align: left;
      margin-right: 20px;
    }
  }
</style>
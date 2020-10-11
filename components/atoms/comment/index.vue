<template>
  <section class="comment">
    <div class="user-info-wrapper">
      <div class="user-info" :style="{background: 'url(' + commentAvatar + ')', backgroundSize: '70px'}">
      </div>
      <div class="user-data">
        <h4 class="username">{{username}}</h4>
        <span class="commment-info">{{commentInfo}}</span>
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
    
    .user-info-wrapper {
      display: flex;
      align-items: center;
    }
    .user-data {
      display: flex;
      flex-direction: column;
    }

    .user-info {
      border: 3px solid $color-blue;
      border-radius: 50%;
      padding: 30px;
      margin-right: 15px;
      background-size: contain;
    }

    .username {
      color: $color-blue;
      @include paragraph(14, 700);
      letter-spacing: -1.2;
    }

    .comment-info {
      color: $color-blue;
      @include paragraph(15);
      letter-spacing: -0.9;
      text-align: left;
    }

    .commentContent {
      @include paragraph(15);
      color: $color-primary;
    }
  }
</style>
<template>
  <div class="card-wrapper">
    <div class="card-header">
      <img :src='require(`../../../assets/img/${icon}.svg`)' alt="category icon">
    </div>
    <div class="card-body">
      <h3 class="card-title">{{cardTitle}}</h3>
      <p class="card-content">{{cardContent}}</p>
      <span class="btn-seemore">
        <nuxt-link :to="cardLink">
          Ver mais
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesCard',
  props: {
    icon: {
      type: String,
      default: () => '',
    },
    cardTitle: {
      type: String,
      default: () => '',
    },
    cardContent: {
      type: String,
      default: () => '',
    },
    cardLink: {
      type: String,
      default: () => '',
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    width: 370px;
    height: 690px;
    background: $color-blue;
    padding: 60px 30px 25px 30px;
    margin-right: 70px;
    border-radius: 34px;

    .card-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 45px;

      > img {
        width: 90px;
        height: 90px;
      }
    }

    .card-body {
      background: #718F9D;
      border-radius: 10px;
      display: flex;
      align-items: center;
      min-height: 457px;
      justify-content: space-between;
      flex-direction: column;
      padding: 25px 23px;

      .card-title {
        @include paragraph(30, 900);
        color: #FFF;
        line-height: 37px;
        margin-bottom: 15px;
      }

      .card-content {
        @include paragraph(16);
        color: #414A4F;
      }


      span.btn-seemore {
        margin-top: 20px;
        display: block;
        border-radius: 10px;
        background: $color-secondary;
        padding: 10px 70px;
        @include paragraph(18, 900);
        transition: all .3s ease-in-out;
        

        a {
          color: $color-white;
        }

        &:hover {
          background: $color-secondary-hover;
          cursor: pointer;
        }
      }
    }
  }
</style>
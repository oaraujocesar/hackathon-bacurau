<template>
  <div class="container">
    <section class="opening">
      <h1>EducaMind</h1>
      <p>Seja protagonista.</p>
    </section>
   <section class="auth">
      <FormAuth />
   </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  > .auth {
    width: 60%;
    height: 100vh;
    padding-top: 9%;
    display: flex;
    justify-content: center;
  }

  > .opening {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: url('~@/assets/img/banner-bg.png') center center no-repeat;
    padding: 13% 5%;
    background-size: cover;
    font-family: "Roboto";
    font-weight: bold;
    color: $color-white;
    position: relative;

    > h1 {
      /* max-width: 350px; */
      margin-top: 50px;
      @include title;
      font-size: 60px;
      strong {
        font-weight: 700;
      }
    }

    > p {
      @include paragraph(20, 500);
      margin-top: 8px;
    }
  }
}
</style>

<template>
  <section id="home">
    <div class="home-header">
      <Title label="EducaMind" subtitle>
        A EducaMind é uma plataforma pensada para te ajudar a atingir suas metas,
        em um ambiente colaborativo e que permite mensurar a sua evolução.
        Aqui você pode receber ajuda de quem já chegou lá ou ajudar quem está no mesmo caminho que você.
      </Title>
    </div>
    
    <div class="home-body">
      <CategoriesCard
      v-for="(link, index) in links"
      :key="index"
      :icon="link.icon"
      :cardTitle="link.title"
      :cardContent="link.content"
      :cardLink="link.path"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    links: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style lang="scss" scoped>
#home {
  .home-header {
    max-width: 800px;
    margin-top: 40px;
  }
  .home-body {
    display: flex;
  }
}
</style>
<style lang="scss">
#home {
   .title {
   color: $color-blue;
   
   .subtitle {
     color: $font-color;
   }
  }
}
</style>
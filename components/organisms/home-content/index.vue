<template>
  <section id="home">
    <div class="home-header">
      <Title label="EducaMind" subtitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
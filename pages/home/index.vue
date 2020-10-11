<template>
<section class="main">
  <HomeContent :links="links"/>
</section>
</template>

<script>


export default {
  layout: 'home',
  data: () => ({
    links: [
      {
        path: '/home/educacional',
        icon: 'ic-mind-health',
        title: 'Saúde Educacional',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse auctor urna vel eros blandit viverra. Integer sodales placerat dictum.
        Cras a augue in lorem aliquam cursus. Pellentesque luctus eros eget quam maximus porttitor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor urna vel eros blandit viverra.
        Integer sodales placerat dictum.
        `
      },
      {
        path: '/home/integral',
        icon: 'ic-health',
        title: 'Saúde Integral',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse auctor urna vel eros blandit viverra. Integer sodales placerat dictum.
        Cras a augue in lorem aliquam cursus. Pellentesque luctus eros eget quam maximus porttitor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor urna vel eros blandit viverra.
        Integer sodales placerat dictum.
        `
      },
      {
        path: '/home/social',
        icon: 'ic-people',
        title: 'Saúde Social',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse auctor urna vel eros blandit viverra. Integer sodales placerat dictum.
        Cras a augue in lorem aliquam cursus. Pellentesque luctus eros eget quam maximus porttitor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor urna vel eros blandit viverra.
        Integer sodales placerat dictum.
        `
      },
      {
        path: '/home/profissional',
        icon: 'ic-progress',
        title: 'Saúde Profissional',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse auctor urna vel eros blandit viverra. Integer sodales placerat dictum.
        Cras a augue in lorem aliquam cursus. Pellentesque luctus eros eget quam maximus porttitor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor urna vel eros blandit viverra.
        Integer sodales placerat dictum.
        `
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 64px);
  padding: 10px;
  background: #fafafa;
}
</style>
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
        A saúde educacional engloba todo o empenho depositado em aprender de uma maneira geral,
        refere-se à todas as técnicas utilizadas para obter conhecimento e desenvolvimento intelectual,
        aperfeiçoando capacidades de aprendizado como autodidatismo ou
        uma pratica mais constante de leitura que amplificam o conhecimento a capacidade de raciocínio e capacidade critica.
        `
      },
      {
        path: '/home/integral',
        icon: 'ic-health',
        title: 'Saúde Integral',
        content: `
        A saúde integral contempla a saúde física e também a psicológica,
        diversas vezes deixada de lado ou considerada menos importante. Não se consegue ter um corpo são, sem ter uma mente são e equilibrada.
        Por tanto, fatores emocionais e físicos se correlacionam. A saúde engloba todas as dimensões do ser humano e só é possível se todos os focos estiverem integrados.
        `
      },
      {
        path: '/home/social',
        icon: 'ic-people',
        title: 'Saúde Social',
        content: `
        Saúde social possui grande efeito no que diz respeito a saúde individual, especialmente como informações, interações sociais podem contribuir para melhorar outras formas de saúde. Refere-se à saúde de uma pessoa em relação a sua capacidade de interagir com outras pessoas e prosperar em ambientes sociais, assim como a saúde da sociedade e de como as pessoas são tratadas.
        `
      },
      {
        path: '/home/profissional',
        icon: 'ic-progress',
        title: 'Saúde Profissional',
        content: `
        Está relacionada a maneira de aprimorar a capacidade de trabalho visando o desenvolvimento pessoal e profissional sem que isto afete a saúde do indivíduo. Por tanto, refere-se as formas encontradas para desenvolver atividades e obter experiências com maior qualidade, no intuito de alcançar metas que dependam deste desenvolvimento profissional para serem alcançadas.
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
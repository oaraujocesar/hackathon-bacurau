
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~components/bosons/variables-and-mixins.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/notifications', ssr: false },
    { src: '@/plugins/vuex-persist', ssr: false },
    { src: '@/plugins/vue-js-modal', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */


  styleResources: {
    scss: ['components/bosons/*.scss'],
  },

  axios: {
    baseURL: process.env.API_URL || 'https://hackathon-bacurau-api.herokuapp.com/v1',
    proxy: false,
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

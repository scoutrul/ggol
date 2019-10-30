const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: 'AIzaSyA1KfnAWNp2hSu-fGXpDrOdX6jap4ICLiU',
            authDomain: 'migg-63592.firebaseapp.com',
            databaseURL: 'https://migg-63592.firebaseio.com',
            projectId: 'migg-63592',
            storageBucket: 'migg-63592.appspot.com',
            messagingSenderId: '32087990833',
            appId: '1:32087990833:web:c571e8790b53f035',
            measurementId: 'G-KEZBCF0V5W'
          },
          production: {
            apiKey: 'AIzaSyA1KfnAWNp2hSu-fGXpDrOdX6jap4ICLiU',
            authDomain: 'migg-63592.firebaseapp.com',
            databaseURL: 'https://migg-63592.firebaseio.com',
            projectId: 'migg-63592',
            storageBucket: 'migg-63592.appspot.com',
            messagingSenderId: '32087990833',
            appId: '1:32087990833:web:c571e8790b53f035',
            measurementId: 'G-KEZBCF0V5W'
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'realtimeDb'],
        customEnv: false,
        functionsLocation: 'us-central1',
        remoteConfig: {
          settings: {
            fetchTimeoutMillis: 60000,
            minimumFetchIntervalMillis: 43200000
          },
          defaultConfig: {
            welcome_message: 'Welcome'
          }
        }
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

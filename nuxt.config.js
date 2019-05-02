const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
  },
  loading: { color: '#f5f' },
  css: [
  
  ],
  
  plugins: [
    '~plugins/vuetify',
    '~plugins/core-components',
    '~plugins/api',
    '~plugins/axios-defaults'],
  
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/webpackmonitor',
    '@nuxtjs/dotenv'
  ],
  styleResources: {
    stylus: [
      '~node_modules/vuetify/src/stylus/settings/_variables',
      '~node_modules/vuetify/src/stylus/generic/_transitions',
      '~assets/styles/base/fonts',
      '~assets/styles/base/normalize',]
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  
  build: {
    vendor: ['axios'],
    analyze: true,
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {}
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: ['vue-loader', 'style-loader', 'css-loader', 'stylus-loader'],
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.styl$/,
          loader: ['style-loader', 'css-loader', 'stylus-loader'],
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.css$/,
          loader: ['style-loader', 'css-loader', 'vue-style-loader'],
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.pug$/,
          loader: ['pug-plain-loader'],
          exclude: /(node_modules)/
        })
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
}

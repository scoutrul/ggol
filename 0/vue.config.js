module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: '/ggol',
  css: {
    extract: false
  },

  pwa: {
    name: 'GGol'
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}

module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,
  productionSourceMap: false,

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
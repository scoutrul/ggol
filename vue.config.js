module.exports = {
  assetsDir: "assets",
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: '/',
  css: {
    extract: false
  },

  pwa: {
    name: "GGol"
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};

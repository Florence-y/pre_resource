module.exports = {
  configureWebpack: {
    resolve: {
      alias: { // 配置路径别名
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'network': resolve('src/network'),
        'plugins': resolve('src/plugins'),
        'views': resolve('src/views'),
      }
    }
  }
}
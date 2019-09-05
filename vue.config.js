const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 9999,
    open: true
  },
  chainWebpack: config => {
    config.module.rule('eslint')
  },
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        '@': resolve('src')
      }
    }
  }
}

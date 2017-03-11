var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')

module.exports = Object.assign(baseConfig, {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
})

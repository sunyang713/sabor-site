var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')

module.exports = Object.assign(baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]) // saves ~100k from build
  ])
})

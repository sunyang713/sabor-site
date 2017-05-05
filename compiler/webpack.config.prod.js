var webpack = require('webpack')
var CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin()
  ]
}

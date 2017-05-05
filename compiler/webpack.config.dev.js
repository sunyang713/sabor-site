var webpack = require('webpack')

module.exports = {
  output: {
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

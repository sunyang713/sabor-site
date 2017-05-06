var webpack = require('webpack')

module.exports = {
  output: {
    filename: 'js/[name].[hash].js',
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

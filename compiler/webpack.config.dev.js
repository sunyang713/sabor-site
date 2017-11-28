var webpack = require('webpack')

module.exports = {
  output: {
    filename: 'js/[name].[hash].js',
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

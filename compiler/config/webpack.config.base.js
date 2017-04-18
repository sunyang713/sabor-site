var { resolve } = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: resolve('src'),
  entry: '.',
  output: {
    filename: 'js/[name].bundle.js?[chunkhash:5]',
    path: resolve('dist'),
    publicPath: process.env.PUBLIC_PATH
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: 'css-loader',
            publicPath: '../' // fuck you sokra https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27
          })
        }
      }
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]?[hash:5]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(process.env.npm_config_secret)),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH)
    }),
    new webpack.ProvidePlugin({
      // Shim fetch & Promise
      Promise: 'es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // saves ~100k from build
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[contenthash:5]',
      allChunks: true // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/120
    }),
    new HtmlWebpackPlugin({
      template: resolve('compiler', 'template.ejs'),
      test: 'lol'
    }),
    new CopyWebpackPlugin([{
      from: resolve('assets')
    }])
  ]
}

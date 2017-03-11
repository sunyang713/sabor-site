const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: resolve('src'),
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'es6-promise',
      'whatwg-fetch'
    ],
    main: '.'
  },
  output: {
    filename: 'js/[name].bundle.js?[chunkhash:5]',
    path: resolve('dist'),
    pathinfo: process.env.NODE_ENV !== 'production',
    publicPath: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'
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
            use: 'css-loader',
            fallback: 'vue-style-loader'
          })
        }
      }
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]?[hash:5]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'assets', 'template.ejs'),
      test: 'lol'
    }),
    new ExtractTextPlugin('css/[name].css?[chunkhash:5]'),
    new webpack.DefinePlugin({
      'process.env.FB_ACCESS_TOKEN': JSON.stringify(
        process.env.FB_ACCESS_TOKEN || process.env.npm_package_config_FB_ACCESS_TOKEN
      ),
      'process.env.PUBLIC_PATH': process.env.PUBLIC_PATH && JSON.stringify(process.env.PUBLIC_PATH)
    }),
    new webpack.ProvidePlugin({
      // Shim fetch & Promise
      Promise: 'es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js?[chunkhash:5]'
    })
  ]
}

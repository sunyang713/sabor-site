var { resolve } = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: resolve('src'),
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'es6-promise',
      'whatwg-fetch',
      'moment'
    ],
    main: '.'
  },
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
            use: {
              loader: 'css-loader',
              options: { url: false }
            },
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
    new CopyWebpackPlugin([{
      from: resolve('assets')
    }]),
    new HtmlWebpackPlugin({
      template: resolve('compiler', 'template.ejs'),
      test: 'lol'
    }),
    new ExtractTextPlugin('css/[name].css?[chunkhash:5]'),
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js?[chunkhash:5]'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
  ]
}

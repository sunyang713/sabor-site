var { resolve } = require('path')
var webpack = require('webpack')
var WebpackChunkHash = require('webpack-chunk-hash')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('src'),
  entry: '.',
  output: {
    filename: 'js/[name].bundle.js?[chunkhash]',
    path: process.env.BUILD_PATH && resolve(process.env.BUILD_PATH),
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
            use: 'css-loader',
            fallback: 'vue-style-loader',
            publicPath: '../' // fuck you sokra https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27
          })
        }
      }
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'file-loader',
      options: { name: 'images/[name].[ext]?[hash]' }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [

    // Inject environment variables.
    new webpack.EnvironmentPlugin(['NODE_ENV', 'PUBLIC_PATH']),

    // Inject application variables.
    new webpack.EnvironmentPlugin(env),

    // Shim fetch & Promise
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),

    // Implicit Common Vendor Chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),

    // Separate webpack runtime manifest into its own chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // Inline the webpack runtime manifest into the HTML
    new InlineManifestWebpackPlugin(),

    // Export a chunk manifest.
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackChunkManifest',
      inlineManifest: true
    }),

    new HtmlWebpackPlugin({
      template: resolve('compiler', 'template.ejs'),
      chunksSortMode: 'dependency',
      production: process.env.NODE_ENV === 'production'
    }),

    // Replace the standard webpack chunkhash with md5.
    new WebpackChunkHash(),

    new ExtractTextPlugin({
      filename: 'css/[name].css?[contenthash]',
      allChunks: true // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/120
    }),

    new CopyWebpackPlugin([{
      from: resolve('assets')
    }]),

    // Ignore extraneous locales from moment - saves ~100k from build
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

  ]
})

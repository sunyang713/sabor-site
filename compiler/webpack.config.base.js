var { resolve } = require('path')
var webpack = require('webpack')
var ChunkHashPlugin = require('webpack-chunk-hash')
var HtmlPlugin = require('html-webpack-plugin')
var RuntimeManifestHtmlPlugin = require('inline-manifest-webpack-plugin')
var ChunkManifestHtmlPlugin = require('chunk-manifest-webpack-plugin')
var CopyAssetsPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('src'),
  entry: '.',
  output: {
    filename: 'js/[name].js?[chunkhash]',
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: null,
      PUBLIC_PATH: null
    }),

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

    // Export the webpack runtime manifest.
    new RuntimeManifestHtmlPlugin({
      name: 'webpackRuntimeManifest'
    }),

    // Export the webpack chunk manifest.
    new ChunkManifestHtmlPlugin({
      manifestVariable: 'webpackChunkManifest',
      inlineManifest: true
    }),

    new HtmlPlugin({
      template: resolve('compiler', 'template.ejs'),
      production: process.env.NODE_ENV === 'production',
      inject: false
    }),

    // for gh-pages
    new HtmlPlugin({
      filename: '404.html',
      template: resolve('compiler', 'template.ejs'),
      ghpages: true,
      inject: false
    }),

    // Replace the standard webpack chunkhash with md5.
    new ChunkHashPlugin(),

    new ExtractTextPlugin({
      filename: 'css/[name].css?[contenthash]',
      allChunks: true // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/120
    }),

    new CopyAssetsPlugin([{
      from: resolve('assets')
    }]),

    // Ignore extraneous locales from moment - saves ~100k from build
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

  ],
  // no seriously fuck you. https://github.com/webpack/webpack/issues/1593#issuecomment-154418231
  // https://github.com/webpack/webpack/issues/1315
  // recordsPath: resolve(process.env.BUILD_PATH, 'records.json')
})

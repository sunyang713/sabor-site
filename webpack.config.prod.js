"use strict";

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var poststylus = require("poststylus");
var config = require(path.join(__dirname, "./config.js"));
var srcPath = path.join(__dirname, "../");
require("es6-promise").polyfill();

module.exports = {
  resolve: {
    alias: {
      // "facebook": "http://connect.facebook.net/en_US/sdk.js"
      "fbsdk": path.join(srcPath, "fbsdk")
    },
    root: srcPath,
    extensions: ["", ".js", ".jsx", ".styl", ".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG"],
    modulesDirectories: ["node_modules", "src"]
  },

  entry: {
    common: [
      "history",
      "immutable",
      "jquery",
      "moment",
      "react",
      "react-bootstrap",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "redux-thunk"
    ],
    index: path.join(srcPath, "index.js")
  },
  output: {
    path: path.join(srcPath, "../dist"),
    publicPath: config.publicPath,
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: srcPath, loader: "babel" },
      { test: /\.css$/, include: path.join(srcPath, "assets/css"), exclude: /\.useable\.css$/, loader: "style!css!postcss" },
      { test: /\.styl$/, include: path.join(srcPath, "assets/styles"), loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus" },
      { test: /\.json$/, include: path.join(srcPath, "assets"), loader: "json" },
      { test: /\.png$/, include: path.join(srcPath, "assets/images"), loader: "url?limit=100000" },
      { test: /\.jpg$/, include: path.join(srcPath, "assets/images"), loader: "file" },
      { test: /fbsdk/, loader: "exports?FB!script" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?prefix=font/" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  // misc plugins
  stylus: {
    use: [
      poststylus([
        "autoprefixer"
      ])
    ]
  },
  postcss: [
    require("autoprefixer")
  ],

  // webpack plugins
  plugins: [
    new ExtractTextPlugin(
      "[name].css",
      { allChunks: true }
    ),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      template: path.join(srcPath, "assets/index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      "__DEV__": false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      FB: "fbsdk",
      "window.FB": "fbsdk"
    })
  ]
}





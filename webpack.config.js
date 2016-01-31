"use strict";

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var poststylus = require("poststylus");
var autoprefixer = require("autoprefixer");
var srcPath = path.join(__dirname, "src");
var inDevMode = process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development";
require('es6-promise').polyfill();

/* EXTREMELY IMPORTANT HERE!!! */
var publicPath = inDevMode ? "/" : "/~jys2124/"; // trailing slash needed?


module.exports = {
  resolve: {
    alias: {
      // "react": "react-lite",
      // "react-dom": "react-lite",
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
    path: path.join(__dirname, "dist"),
    publicPath: publicPath,
    filename: "[name].js",
    pathInfo: inDevMode
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: srcPath, loader: "babel" },

      { test: /\.css$/, exclude: /\.useable\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss") },

      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus") },

      { test: /\.json$/, loader: "json" },

      { test: /\.png$/, loader: "url?limit=100000" },

      { test: /\.jpg$/, loader: "file" },

      // I have no idea what I'm doing
      { test: /fbsdk/, loader: 'exports?FB!script' }
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
    autoprefixer
  ],

  // webpack plugins
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
    new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
    new HtmlWebpackPlugin({
      // inject: "body",
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      hash: inDevMode,
      template: path.join(srcPath, "assets/index.html")
    }),
    new ExtractTextPlugin(
      "[name].css",
      { allChunks: true }
    ),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      FB: "fbsdk",
      "window.FB": "fbsdk"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: inDevMode ? JSON.stringify("development") : JSON.stringify("production")
      },
      "IN_DEV_MODE": inDevMode
    })
  ],

  // dev options
  debug: inDevMode,
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: {
      index: publicPath
    }
  }
}


    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: false,
    // }),


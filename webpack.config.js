"use strict";

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var srcPath = path.join(__dirname, "src");
var inDevMode = process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development";

/* EXTREMELY IMPORTANT HERE!!! */
var publicPath = inDevMode ? "/" : "/cu/sabor/"; // trailing slash needed?


module.exports = {
  target: "web",
  cache: true,
  entry: {
    common: inDevMode ? [
      "moment",
      "react",
      "react-dom",
      "react-modal",
      "react-router",
      "react-redux",
      "redux",
      "redux-devtools",
      "redux-devtools-dock-monitor",
      "redux-devtools-log-monitor",
      "redux-simple-router",
      "redux-thunk"
    ] : [
      "moment",
      "react-lite",
      "react-modal",
      "react-router",
      "react-redux",
      "redux",
      "redux-simple-router",
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
      // required for .js and .jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },

      // required for .css
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },

      // required to for .styl
      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader") },

      // required for bootstrap icons
      //   url-loader uses DataUrls
      //   file-loader emits files
      { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
      { test: /\.eot$/, loader: "file-loader?prefix=font/" },
      { test: /\.svg$/, loader: "file-loader?prefix=font/" },

      // required for .json
      { test: /\.json$/, loader: "json-loader" },

      // required for .png
      { test: /\.png$/, loader: "url-loader?limit=100000" },

      // required for .jpg
      { test: /\.jpg$/, loader: "file-loader" },

      // eslint-loader
      // { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: "eslint-loader" },
    ]
  },
  resolve: {
    alias: {
      "react": inDevMode ? "react" : "react-lite",
      "react-dom": inDevMode ? "react-dom" : "react-lite",

      // Bind version of jquery
      jquery: "jquery-2.1.4",

      // Bind version of jquery-ui
      "jquery-ui": "jquery-ui-1.10.5",

      // jquery-ui doesn"t contain a index file
      // bind module to the complete module
      "jquery-ui-1.10.5$": "jquery-ui-1.10.5/ui/jquery-ui.js"
    },
    root: srcPath,
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules", "src"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
    new HtmlWebpackPlugin({
      inject: "body",
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
        "window.jQuery": "jquery"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(inDevMode ? "development" : "production"),
      "IN_DEV_MODE": inDevMode
    })
  ],
  debug: inDevMode,
  devtool: inDevMode ? "source-map" : "cheap-module-source-map",
  devServer: {
    // contentBase: path.join(__dirname, publicPath),
    contentBase: "./dist",
    historyApiFallback: true
  },
  // some janky fix for 'request' npm package
  node: {
    net: "empty",
    tls: "empty"
  }
};

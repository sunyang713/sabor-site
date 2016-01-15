"use strict";

/* EXTREMELY IMPORTANT HERE!!! */
var publicPath = "/cu/sabor/"; // trailing slash needed?

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var srcPath = path.join(__dirname, "src");
var inDevMode = process.env.NODE_ENV === "dev"

module.exports = {
  target: "web",
  cache: true,
  entry: {
    common: inDevMode ? [
      "react",
      "react-dom",
      "react-bootstrap",
      "react-router",
      "react-router-bootstrap",
      "moment",
      "react-addons-create-fragment"
    ] : [
      "react-lite",
      "react-bootstrap",
      "react-router",
      "react-router-bootstrap",
      "moment"
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
      // required for js
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },

      // required for react jsx
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },

      // required to write "require("./style.css")"
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },

      // Stylus loader
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },

      // required for bootstrap icons.
      //  url-loader uses DataUrls.
      //  file-loader emits files.
      { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
      { test: /\.eot$/, loader: "file-loader?prefix=font/" },
      { test: /\.svg$/, loader: "file-loader?prefix=font/" },

      // misc
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  resolve: {
    alias: inDevMode ? {
      // Bind version of jquery
      jquery: "jquery-2.1.4",

      // Bind version of jquery-ui
      "jquery-ui": "jquery-ui-1.10.5",

      // jquery-ui doesn"t contain a index file
      // bind module to the complete module
      "jquery-ui-1.10.5$": "jquery-ui-1.10.5/ui/jquery-ui.js"
    } : {
      "react": "react-lite",
      "react-dom": "react-lite",

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
      title: "Sabor",
      inject: "body",
      // favicon: path.join(srcPath, "assets/favicon.ico"),
      template: path.join(srcPath, "assets/index.html")
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.DefinePlugin({
      "env.PROD": process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production",
      "env.PRODUCTION": process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production",
      "env.DEV": process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development",
      "env.DEVELOPMENT": process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development",
      "env.SOURCE": process.env.NODE_ENV === "dev" ? JSON.stringify("http://localhost:5000") : JSON.stringify("http://www.columbia.edu/cu/sabor")
    })
  ],
  // some janky fix for 'request' npm package
  node: {
    net: "empty",
    tls: "empty"
  },
  debug: inDevMode,
  devtool: inDevMode ? "source-map" : "cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  }
};

'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    index: path.join(srcPath, 'index.js'),
    common: ['react', 'react-dom', 'jquery', 'react-bootstrap', 'react-router']//, 'alt']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },

      // required for bootstrap icons.
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
      { test: /\.eot$/, loader: "file-loader?prefix=font/" },
      { test: /\.svg$/, loader: "file-loader?prefix=font/" },

      // required for react jsx
      { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" },
      { test: /\.jsx$/, loader: "babel-loader" },

      // misc
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    net: "empty",
    tls: "empty"
  },

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
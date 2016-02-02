"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var express = require("express");
var path = require("path");
var webpack = require("webpack");
var WebpackStream = require("webpack-stream");
var webpackConfig = process.env.NODE_ENV === "development" ? require("./webpack.config.dev.js") : require("./webpack.config.prod.js");


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function() {
  return gulp.src("src/entry.js")
    .pipe(WebpackStream(webpackConfig, function(err, stats) {
      if (err) throw new gutil.PluginError("webpack:build", err);
      gutil.log("[webpack:build]", stats.toString({
        colors: true
      }));
      // callback();
    }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("webpack-dev-server", function(callback) {
  var app = express();
  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    // server and middleware options
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(require("webpack-hot-middleware")(compiler));

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });

  app.listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
      // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080");

    // keep the server alive or continue?
    // callback();
    console.log("Listening at http://localhost:8080");
  });
});

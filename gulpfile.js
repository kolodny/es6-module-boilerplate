var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var to5 = require("gulp-6to5");
var concat = require("gulp-concat");
var header = require('gulp-header');
var transformHead = require('gulp-transform-head');

gulp.task("default", function () {
  return gulp.src("src/es6/**/*.js")
    .pipe(transformHead(1, function(data) {
      var lines = data.split('\n');
      var firstLine = lines[0];
      var toAppend = "\"use strict\";\nrequire('core-js/shim');\nrequire('regenerator/runtime')\n";
      if (/\s*#!/.test(firstLine)) {
        console.log('First!');
        console.log(firstLine + '\n' + toAppend + lines.slice(1).join('\n'))
        return firstLine + '\n' + toAppend + lines.slice(1).join('\n');
      }
      return toAppend + data;
    }))
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("src/es5"));
});

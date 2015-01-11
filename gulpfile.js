var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var to5 = require("gulp-6to5");
var concat = require("gulp-concat");
var header = require('gulp-header');

gulp.task("default", function () {
  return gulp.src("src/es6/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(header("\"use strict\";\nrequire('core-js/shim');\nrequire('regenerator/runtime')\n"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("src/es5"));
});

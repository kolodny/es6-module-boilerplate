var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var removeLines = require('gulp-remove-lines');

var removeUseStrict = removeLines({'filters': [
  /^\s*(['"])use strict(\1)\s*;\s*$/
]});

gulp.task('es5ize', function () {
  return gulp.src('src/es6/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({sourceMaps: true}))
    .pipe(removeUseStrict)
    .pipe(header('"use strict";\nrequire(\'traceur/bin/traceur-runtime\');\n'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/es5'))
    ;
});

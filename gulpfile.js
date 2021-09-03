const gulp = require('gulp');
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');


function style () {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(gulpStylelint({
        reporters: [
          {
              formatter: 'string',
               console: true
          }
        ]
    }))
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
}
function style () {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(gulpStylelint({
        reporters: [
          {
              formatter: 'string',
               console: true
          }
        ]
    }))
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
}

function min() {
      return gulp.src('./assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";}))
        .pipe(gulp.dest('./assets/css'));
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./assets/scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);

}

exports.style = style;
// exports.lint = lint;
exports.watch = watch;
exports.min = min;




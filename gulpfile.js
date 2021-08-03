const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');

function style () {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
}

function lintCss () {
 
  return gulp.src('./assets/scss/**/*.scss')
        .pipe(gulpStylelint({
         reporters: [
        {
            formatter: 'string',
             console: true
            }
      ]
    }));
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
exports.lintCss = lintCss;
exports.watch = watch;



 
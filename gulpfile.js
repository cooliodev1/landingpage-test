const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


exports.default = () =>
  gulp
    .src("img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));

function style(){
    
    return gulp.src('./scss/**/*.scss')

    .pipe(sass())
    
    .pipe(gulp.dest('./css'))
}



exports.style = style;
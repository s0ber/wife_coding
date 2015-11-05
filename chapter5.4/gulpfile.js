'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./styles_src/main.scss')
    .pipe(sass({includePaths: ['./styles_src']}).on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./styles_src/**/*.scss', './styles_src/**/*.sass'], ['sass']);
});
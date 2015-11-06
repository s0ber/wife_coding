'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('compile_css', function () {
  gulp.src('./styles_src/main.scss')
    .pipe(sass({includePaths: ['./styles_src']}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie >= 8']
    }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function () {
  gulp.watch(['./styles_src/**/*.scss', './styles_src/**/*.sass'], ['compile_css']);
});
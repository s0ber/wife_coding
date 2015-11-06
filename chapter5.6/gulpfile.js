'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');

gulp.task('compile_html', function() {
  gulp.src('./src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build'))
});

gulp.task('compile_css', function () {
  gulp.src('./src/styles/main.scss')
    .pipe(sass({includePaths: ['./src/styles']}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie >= 8']
    }))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch', ['compile_html', 'compile_css'], function () {
  gulp.watch(['./src/styles/**/*.scss', './src/styles/**/*.sass'], ['compile_css']);
  gulp.watch('./src/**/*.jade', ['compile_html']);
});
var gulp = require('gulp');
var util = require('gulp-util');
var wrap = require('gulp-wrap');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

var package = require('./package.json');

gulp.task('compile', function () {
  return gulp.src('src/**/*')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('dist/out'));
});

gulp.task('build', ['compile'], function () {
  return gulp.src('dist/out/core.js')
    .pipe(webpack({ output: { filename: './rmx.js' } }))
    .pipe(util.env.type !== 'DEV' ? uglify() : util.noop())
    .pipe(wrap('/*! Rmx.js v' + package.version + ' | (c) Ramziddin Makhmudov | MIT license */\n<%= contents %>\n\n'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function () {
  return gulp.src('src/**/*')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', ['build'], function () {
  return gulp.src('test/test.js')
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['build']);
});

gulp.task('default', ['build']);

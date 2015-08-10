'use strict'; 'use restrict';
// libs
var gulp = require('gulp');
var jspm = require('jspm');
var $ = require('gulp-load-plugins')({lazy: true}); // load plugins
var path = require('path');
var bundle = require('./bundle');

var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  return browserSync.init({
    online: false,
    server: {
      baseDir: ['app', 'app-data']
    }
  }, function() {
    gulp.watch([
      'app/**/*.hbs',
      '!app/jspm_packages/**/*.hbs'
    ], function(file){
      bundle.template('app/', file.path);
    });

    gulp.watch([
      'app/**/*.css',
      'app/**/*.styl'
    ], ['vcl']);

    gulp.watch([
      'app-data/css/*.css'
    ], function(file){
      gulp.src('app-data/css/*.css')
          .pipe(browserSync.stream());
    });
  });
});

gulp.task('bundle-templates', function() {
  return bundle.templates('app/');
});

gulp.task('bundle-dependencies', function() {
  return bundle.dependencies('app/');
});

gulp.task('dev', ['bundle-dependencies', 'bundle-templates', 'watch']);

gulp.task('bundle-app', function() {
  return jspm.bundleSFX('main', 'dist/app.js', { sourceMaps: false });
});

// copy and minify html
gulp.task('html', function(){
  gulp.src('app/index-prod.html')
    .pipe($.rename(function(path){
      path.basename = path.basename.slice(0, -5); // remove -production
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', ['bundle-app'], function(){
  return gulp.src('dist/app.js')
    .pipe($.size())
    .pipe($.uglify())
    .pipe($.concat('app.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('css', function(){
  return gulp.src('app-data/css/*.css')
    // .pipe($.csso())
    .pipe($.autoprefixer())
    .pipe($.concat('app.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('vcl', function() {
  return gulp.src('./package.json')
    .pipe($.vclPreprocessor({
      package: true, // parses input as package.json instead of trying to pre-process
      output: 'app.css', // output will be written to dist/css/main.css
      includeDevDependencies: true // gets passed to the vcl-preprocessor
    }))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('app-data/css/'));
});

// copy data
gulp.task('copy-data', function() {
  gulp.src(['app-data/**/*'], {
    buffer: false
  }) // images have their own task
  .pipe(gulp.dest('dist'));
});

gulp.task('build', [
  'vcl', // create vcl
  'html', // copy html
  'copy-data', // copy data
  'js', // minify js
  'css' // minify css
]);

gulp.task('serve-dist', function() {
  var browserSync = require('browser-sync');
  browserSync({
    online: false,
    server: {
      baseDir: ['dist']
    },
    port: 3030 // should be different because of manifest
  });
});

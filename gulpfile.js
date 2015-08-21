var gulp = require('gulp');

var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var jade = require('gulp-jade');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var _ = require('underscore');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var DEST = 'public/';
var DATA_DEST = DEST + 'data/';
var APP = 'app/';
var CSS_DEST = DEST + 'css/';


gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', './tasks/**/*.js', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Monitor js files and rebuild dependency trees on change
gulp.task('bundlejs', function() {
  var bundler = watchify(browserify('./' + APP + 'javascript/index.js', watchify.args));

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      .on('error', notify.onError("JS error: <%= error.message %>"))
      .pipe(source('build.js'))
      .pipe(gulp.dest(DEST + '/javascript/'));
  }

  return rebundle();
});

// Monitor less and main jade template for changes
gulp.task('watch', ['bundlejs'], function() {

  gulp.watch(APP + '/stylesheets/**', ['styles']);
  gulp.watch(APP + '/templates/*.jade', ['html']);
});

// Render jade template to html
gulp.task('html', function() {
  gulp.src(APP + '/templates/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(DEST))
    .on("error", notify.onError("Html error: <%= error.message %>"));
});

// Watch less files for changes and compile to css
gulp.task('styles', function() {
  gulp.src(APP + '/stylesheets/**/*.scss')
    .pipe(plumber())
    .pipe(compass({
      sass: APP + 'stylesheets/',
      css: DEST + 'css/',
      image: DEST + 'images/',
      font: DEST + 'fonts/'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(DEST + 'css/'))
    .on("error", notify.onError("Styles error: <%= error.message %>"));
});

var gulp = require('gulp'),
  concat = require('gulp-concat');

var jsLibs = [
  'node_modules/angular/angular.js',
  'node_modules/angular-ui-router/release/angular-ui-router.js'
];

gulp.task('default', ['build-js', 'build-html', 'build-style', 'data'], function(){
});

gulp.task('build-js', ['build-lib-js'], function(){
  return gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-lib-js', function(){
  return gulp.src(jsLibs)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function(){
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-style', function(){
  return gulp.src('app/**/*.css')
    .pipe(concat('site.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('data', function(){
  return gulp.src('app/data/*.json')
    .pipe(gulp.dest('dist/data'));
});
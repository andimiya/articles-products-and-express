const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('scss', () => {
  return gulp.src('./scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});

//watch makes it look at this directory and any directories within this directory. If there are any changes, the watch task triggers and runs the task called 'scss', which updates the app.css file
gulp.task('watch', ['browserSync'], ()=> {
  gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task('browserSync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
  });
});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('default', ['watch', 'scss']);   //run the default task, then run the watch task. If anything canges, then run the scss task.


//the app.scss file is a style compiler, that runs to produce a css file.
//why is app.scss needed? can it handle logic?


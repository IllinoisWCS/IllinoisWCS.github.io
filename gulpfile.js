var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	gulp.src('./assets/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./assets/css'))
	.pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('./assets/sass/style.scss', ['sass']);
});


gulp.task('default', ['watch']);

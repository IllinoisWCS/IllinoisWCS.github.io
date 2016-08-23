var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile the Sass files
gulp.task('sass', function() {
	gulp.src('./assets/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./assets/css'))
	.pipe(browserSync.reload({
      stream: true
    }));
});

// Enable live-reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  });
});

// Watch the sass files and reload when they chance
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('./assets/sass/style.scss', ['sass']);
});

// Run 'gulp' in the command line
gulp.task('default', ['watch']);

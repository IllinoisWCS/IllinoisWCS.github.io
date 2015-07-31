var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./assets/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['sass']);
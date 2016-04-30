// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var paths = require('./gulp.config.json');

// Lint Task
gulp.task('lint', function() {
    var sources = [].concat(paths.js, paths.specs, paths.nodejs);
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(paths.js, ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);
/**
 * Created by cohenma on 6/18/15.
 */
var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function() {
    gulp.src('src/css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('src/server/assets'));
})
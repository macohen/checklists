var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourceMaps = require('gulp-sourcemaps')
var developServer = require('gulp-develop-server')

gulp.task('js', function() {
    gulp.src(['ng/module.js','ng/**/*.js'])
        .pipe(sourceMaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('server/assets'))
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('server:restart', function() {
    gulp.watch(['./app.js'], developServer.restart);
})
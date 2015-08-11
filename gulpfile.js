var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourceMaps = require('gulp-sourcemaps')

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task);
})+
//var developServer = require('gulp-develop-server')

gulp.task('js', function() {
    gulp.src(['src/ng/module.js','src/ng/**/*.js'])
        .pipe(sourceMaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('server/assets'))
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('src/ng/**/*.js', ['js'])
})

gulp.task('watch:css', function () {
    gulp.watch('src/css/**/*.styl', ['css'])
})

gulp.task('dev', ['watch:css','watch:js','dev:server']);

/*gulp.task('server:restart', function() {
    gulp.watch(['./app.js'], developServer.restart);
})*/
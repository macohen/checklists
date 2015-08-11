/**
 * Created by cohenma on 8/11/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function() {
    nodemon({
        script : 'src/server/server.js',
        ext : 'js'
    })
});

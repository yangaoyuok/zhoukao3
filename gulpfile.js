var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
// var data=require('./src/data/')

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './src/',
            index: 'page/index.html',
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(data))
                }
                next();
            }
        },
        files: ['src'],
        port: 2893
    })
})

gulp.task('less', function() {
    gulp.src('./src/static/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css'))
})

gulp.task('default', ['less', 'watch', 'server'], function() {

})

gulp.task('watch', function() {
    gulp.watch('./src/static/less/*.less', ['less'])
})
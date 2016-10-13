var gulp = require('gulp'),
    vueify = require("vueify"),
    uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
	source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function() {
    browserify({
        entries: './src/js/client.js',
		compress: true,
        debug: false
    })
    .transform(vueify)
    .bundle()
    .on('error', function(err) {
        console.log(err.toString());
        this.emit("end");
    })
	.pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))


	browserify({
        entries: './src/js/server.js',
        debug: false,
		standalone: 'server'
    })
    .transform(vueify)
	.bundle()
    .on('error', function(err) {
        console.log(err.toString());
        this.emit("end");
    })
	.pipe(source('server.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))

});


gulp.task('watch:js', function() {
    gulp.watch('./src/js/**/*.*', ['js']);
});


gulp.task('default', ['watch:js', 'js']);

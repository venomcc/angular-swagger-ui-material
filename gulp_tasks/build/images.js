var gulp = require('gulp');

gulp.task('images', function () {
    return gulp.src('src/**/*.png')
        .pipe(gulp.dest('dist/styles'));
});

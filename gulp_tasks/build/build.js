var gulp = require('gulp');

gulp.task('build', ['scripts', 'full', 'plugins', 'styles', 'images', 'dist', 'auth', 'eslint']);

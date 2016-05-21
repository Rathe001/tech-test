'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var plumber = require('gulp-plumber');

var templates = [
    'src/app/**/*.html'
];

// Templates
gulp.task('templates', [], function(){
    return gulp.src(templates)
        .pipe(plumber())
        .pipe(minifyHtml({empty: true}))
        .pipe(templateCache('templates.min.js', {
                root: '/',
                module: 'modTemplates',
                standalone: true
            }
        ))
        .pipe(gulp.dest('dist/js'));
});
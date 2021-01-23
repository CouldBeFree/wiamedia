const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

let preprocessor = 'scss';

function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true
    })
}

function scripts() {
    return src([
        // 'node_modules/jquery/dist/jquery.min.js',
        'app/js/app.js'
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/' + preprocessor + '/application.' + preprocessor + '')
        .pipe(sass())
        .pipe(concat('app.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss( { level: { 1: { specialComments: 0 } } } ))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function startwatch() {
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/' + preprocessor + '/**/*', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.default = parallel(styles, scripts, browsersync, startwatch);
exports.styles = styles;

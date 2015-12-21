'use strict';

var gulp = require('gulp'),
    del = require('del'),
    sequence = require('run-sequence'),
    browserify = require('browserify'),
    bundler = require('gulp-watchify-factor-bundle'),
    path = require('path'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync'),
    cp = require('child_process');

var $ = require('gulp-load-plugins')();

var fixtures = path.resolve.bind(path, __dirname),
    reload = browserSync.reload,
    live = $.util.env.live || false,
    production = $.util.env.production || false,
    watch = $.util.env.watch || false,
    bs = $.util.env.bs || false;

var paths = {
    app: 'app',
    dist: '_site',
    bower: 'bower_components',
    views: '*.html'
};

var files = {
    scss: paths.app + '/scss/**/*.scss',
    entries: [
        paths.app + 'js/index.js',
    ],
    outputs: [
        'index.js'
    ]
};

var autoprefixer_browsers = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('clean', del.bind(null, [paths.dist]));

gulp.task('default', ['clean'], function() {

    if(production) {
        live = true;
        sequence('styles', 'scripts');
    } else if(live && !bs) {
        sequence(['build'], 'watch');
    } else if(bs) {
        sequence(['build'], 'serve', 'watch');
    } else if(watch) {
        sequence(['build'], 'watch');
    } else {
        sequence('styles', 'scripts');
    }
});

gulp.task('jekyll-build', function(done) {

    var cmd = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

    return cp.spawn(cmd, ['build', '--config', '_config.yml', '--source=' + paths.app, '--destination=' + paths.dist], {
        stdio: 'inherit'
    }).on('close', done);

});

gulp.task('build', [
    'styles',
    'scripts'
]);

gulp.task('styles', function() {
    gulp.src(files.scss)
        .pipe($.if(!live, $.newer(files.scss)))
        .pipe($.if(!live, $.sourcemaps.init()))
        .pipe($.sass({
            sourceMap: true
        })
            .on('error', function(err) {
                $.util.log('Sass error: ', $.util.colors.red(err.message));
                $.util.beep();
                this.emit('end');
            }))
        .pipe($.if(!live, $.sourcemaps.write()))
        .pipe($.if(live, $.minifyCss()))
        .pipe(gulp.dest(paths.dist + '/css'))
        .pipe($.autoprefixer({
            browsers: autoprefixer_browsers
        }))
        .pipe($.if(!live, reload({
            stream: true
        })));

});

var resolvedPathsEntries = [],
    resolvedPathsOutputs = [];

files.entries.forEach(function(entry) {
    resolvedPathsEntries.push(fixtures(entry));
});

files.outputs.forEach(function(output) {
    resolvedPathsOutputs.push(output);
});

gulp.task('scripts', function() {

    var b = browserify({
        entries: resolvedPathsEntries,
        debug: !live
    });

    var bundle = bundler(b, {
        entries: resolvedPathsEntries,
        outputs: resolvedPathsOutputs,
        common: 'core.js'
    },
        // more transforms. Should always return a stream.
        function(bundleStream) {

            return bundleStream
                .on('error', $.util.log.bind($.util, 'Browserify Error'))
                .pipe(buffer())
                .pipe($.if(!live, $.sourcemaps.init({
                    loadMaps: true
                })))
                .pipe($.if(live, $.uglify()))
                .pipe($.if(!live, $.sourcemaps.write()))
                .pipe(gulp.dest(paths.dist + '/js'));
        }
    );

    b.on('log', $.util.log);
    return bundle();
});

gulp.task('serve', function() {
    browserSync({
        open: false,
        notify: false,
        proxy: "gb.hunter.dev",
        port: 4444
    });
});

gulp.task('watch', function() {
    gulp.watch([files.scss], ['styles']);
    gulp.watch(paths.app + '/js/**/*.js', ['scripts', reload]);
    gulp.watch(paths.views, reload);
});

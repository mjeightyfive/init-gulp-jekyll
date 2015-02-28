var pkg = require('./package.json'),
    config = {};

var paths = {
    app: 'app',
    dist: '_site',
    bower: 'bower_components'
};

var files = {
    js: [
        paths.bower + '/jquery/dist/jquery.js',
        paths.bower + '/spinjs/spin.js',
        paths.app + '/_js/app.js'
    ],
    css: [
        // bower / libraries etc.
        paths.bower + '/normalize-css/normalize.css',
        paths.bower + '/pure/pure.css',
        paths.bower + '/pure/grids.css',
        paths.bower + '/pure/grids-responsive.css',
        paths.bower + '/pure/grids-units.css',
        // compiled from scss
        paths.dist + '/css/style.css'
    ],
    scss: paths.app + '/_scss/*.scss',
    fonts: [
        paths.app + '/fonts/*'
    ],
    other: [
        paths.bower + '/modernizr/modernizr.js'
    ],
    images: [
        paths.app + '/images/*'
    ]
};

var ignoredCssClasses = [
    /:hover/,
    /:active/,
    /:visited/,
    /:focus/,
    /:checked/,
    /.active/,
    /.open/,
    /.pure-img/
];

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

var templateopts = {
    name: pkg.name,
    author: pkg.author
};

var htmlopts = {
    empty: true,
    quotes: true,
    conditionals: true,
    spare: true
};

config.paths = paths;
config.files = files;
config.autoprefixer_browsers = autoprefixer_browsers;
config.templateopts = templateopts;
config.htmlopts = htmlopts;
config.ignoredCssClasses = ignoredCssClasses;

module.exports = config;
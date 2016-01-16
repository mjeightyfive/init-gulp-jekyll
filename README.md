# init-jekyll

> Initial files for creating a Jekyll based site.

## Install

`npm i && bower i` to pull dependencies

# Usage

* `gulp`
    - runs development mode (compiles styles and scripts).
* `gulp --watch`
    - runs development mode (watch runs in the background and recompiles styles and scripts on file save).
* `gulp --live`
    - runs optimised assets mode (watch runs in the background, recompiles and minifies styles and scripts on file save).
* `gulp --bs`
    - runs development mode (watch runs in the background, recompiles styles and scripts, Browser Sync live-reloads page on file save).
* `gulp --production`
    - builds optimised assets for production.

## Features
- Browserify with [factor-bundle](https://www.npmjs.com/package/gulp-watchify-factor-bundle)
- browser-sync
- css auto-prefixing
- live reload

## License

MIT © [mjeightyfive](http://twitter.com/mjeightyfive)

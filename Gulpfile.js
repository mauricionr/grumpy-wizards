var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task('build', [ 'webpack:build' ]);

gulp.task('webpack:build', function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err)
            throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build] Completed\n' + stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: false,
            version: false
        }));
        callback();
    });
});
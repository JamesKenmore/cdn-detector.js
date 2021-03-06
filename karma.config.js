/* eslint-env commonjs */
module.exports = function(config) {
    "use strict";

    config.set({
        basePath: "./",

        port: 4000,
        runnerPort: 4001,
        logLevel: config.LOG_INFO,

        colors: true,
        autoWatch: false,

        frameworks: ["mocha", "chai"],
        reporters: ["progress", "coverage", "tap"],
        browsers: ["PhantomJS"],

        files: [
            "data/*.js",
            "src/*.js",
            "test/test.js"
        ],

        coverageReporter: {
            type: "html",
            dir: "test/coverage/"
        },

        tapReporter: {
            outputFile: "test/karma.tap"
        }
    });
};

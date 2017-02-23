/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        sassOptions: {
            includePaths: [
                'bower_components/materialize/sass'
            ]
        }
    });

    return app.toTree();
};

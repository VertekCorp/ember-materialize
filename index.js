/* jshint node: true */
'use strict';


var FONTS = [
    'Roboto-Bold.eot',
    'Roboto-Bold.ttf',
    'Roboto-Bold.woff',
    'Roboto-Bold.woff2',
    'Roboto-Light.eot',
    'Roboto-Light.ttf',
    'Roboto-Light.woff',
    'Roboto-Light.woff2',
    'Roboto-Medium.eot',
    'Roboto-Medium.ttf',
    'Roboto-Medium.woff',
    'Roboto-Medium.woff2',
    'Roboto-Regular.eot',
    'Roboto-Regular.ttf',
    'Roboto-Regular.woff',
    'Roboto-Regular.woff2',
    'Roboto-Thin.eot',
    'Roboto-Thin.ttf',
    'Roboto-Thin.woff',
    'Roboto-Thin.woff2'
];


module.exports = {
    name: 'ember-materialize',
    included: function(appOrAddon) {
        this._super.included(appOrAddon);
        var app = appOrAddon;
        if (typeof appOrAddon.import !== 'function' && appOrAddon.app) {
            app = appOrAddon.app;
        }
        this.app = app;

        for (var i = 0; i < FONTS.length; i++) {
            app.import(app.bowerDirectory + '/materialize/dist/fonts/roboto/' + FONTS[i], { destDir: 'fonts/roboto' });
        }

        app.import(app.bowerDirectory + '/materialize/dist/css/materialize.css', { destDir: 'css' });
        app.import(app.bowerDirectory + '/materialize/dist/js/materialize.min.js');
    }
};

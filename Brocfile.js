/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    minifyCSS: {
        enabled: true,
        options: {}
    }
});
// import bootstrap.js into vendor.js
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

module.exports = app.toTree();

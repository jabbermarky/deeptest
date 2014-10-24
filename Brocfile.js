/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
//var app = new EmberApp({
//  lessOptions: {
//  	inputFile: 'godeeptest.less',
//  	outputFile: 'godeeptest.css'
//  }
//});

// import bootstrap.js into vendor.js
// app.import('bower_components/bootstrap/dist/js/bootstrap.js');
module.exports = app.toTree();

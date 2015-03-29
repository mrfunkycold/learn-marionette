require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/text/text',
    mustache: '../bower_components/mustache/mustache',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    'backbone.localstorage': '../bower_components/backbone.localStorage/backbone.localStorage',
    spin: '../bower_components/spinjs/spin',
    'jquery.spin': '../bower_components/spinjs/jquery.spin'
  },
  shim: {
    'backbone.localstorage': ['backbone'],
    'jquery.spin': ['jquery']
  }
});

define(function(require) {
  'use strict';

  var App = require('main/App');

  App.start();
});

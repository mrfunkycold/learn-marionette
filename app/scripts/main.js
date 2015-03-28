require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/text/text',
    mustache: '../bower_components/mustache/mustache',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    'backbone.localstorage': '../bower_components/backbone.localStorage/backbone.localStorage'
  },
  shim: {
    'backbone.localstorage': ['backbone']
  }
});

define(function(require) {
  'use strict';

  var App = require('main/App');

  App.start();
});

/**
 * File name: main.js.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

require.config({
    'paths': {
        'underscore': '../../node_modules/underscore/underscore',
        'underscoreString': '../../node_modules/underscore.string/dist/underscore.string',
        'backbone': '../../node_modules/backbone/backbone',
        'backbone.radio': '../../node_modules/backbone.radio/build/backbone.radio',
        'marionette': '../../node_modules/backbone.marionette/lib/backbone.marionette',
        'jquery': '../../node_modules/jquery/dist/jquery',
        'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
        'text': 'vendor/text'
    },
    'shim': {
        'jquery': {
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'bootstrap': {
            'deps': ['jquery'],
            'exports': 'bootstrap'
        }
    }
});

require([
    'app',
    'jquery',
    'underscore',
    'underscoreString',
    'backbone',
    'backbone.radio',
    'marionette',
    'text',
    'bootstrap'
], function(App){
    'use strict';

    // init and start app
    var app = new App();
    Backbone.Radio.channel('global').reply('getApp', function(){
        return app;
    });
    app.initApp().start();

});
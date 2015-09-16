/**
 * File name: about.controller.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');

    var AboutModel = require('app/models/about/about.model');
    var AboutView = require('app/views/about/about.view');

    /**
     * About controller
     */
    return Marionette.Controller.extend(AppTrail).extend({
        initialize: function(){},
        home: function(){
            var self = this;

            // application layout view
            var layout = this.getApp().layout;

            // define static model
            var aboutModel = new AboutModel({ title: 'About', description: 'About our project' });

            // send model to view, and fill content region of our main app layout view
            layout.content.show(new AboutView({model: aboutModel}));

        }
    });

});
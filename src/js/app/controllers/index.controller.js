/**
 * File name: index.controller.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');

    var IndexModel = require('app/models/index/index.model');
    var IndexView = require('app/views/index/index.view');


    /**
     * Index controller
     */
    return Marionette.Controller.extend(AppTrail).extend({
        initialize: function(){},
        home: function(){

            // application layout view
            var layout = this.getApp().layout;

            // define static model
            var indexModel = new IndexModel({ title: 'Welcome', description: 'Backbone and Marionette test project' });

            // send model to view, and fill content region of our main app layout view
            layout.content.show(new IndexView({model: indexModel}));
        }
    });

});
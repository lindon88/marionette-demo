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

    var Menu = require('app/views/menu/menu.view');

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

            // menu items
            var menuData = [];
            menuData.push({title: 'Home', active: false, url: 'home'});
            menuData.push({title: 'To-do', active: false, url: 'todo'});
            menuData.push({title: 'About', active: true, url: 'about'});
            menuData.push({title: 'Contact', active: false, url: 'contact'});

            // set menu
            layout.menu.show(new Menu({menuData: menuData}));

            // send model to view, and fill content region of our main app layout view
            layout.content.show(new AboutView({model: aboutModel}));

        }
    });

});
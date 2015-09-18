/**
 * File name: contact.controller.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');

    var ContactModel = require('app/models/contact/contact.model');
    var ContactView = require('app/views/contact/contact.view');

    var Menu = require('app/views/menu/menu.view');

    /**
     * Contact controller
     */
    return Marionette.Controller.extend(AppTrail).extend({
        initialize: function(){},
        home: function(){

            // application layout view
            var layout = this.getApp().layout;

            // define static model
            var contactModel = new ContactModel({ title: 'Contact', description: 'Contact us' });

            // menu items
            var menuData = [];
            menuData.push({title: 'Home', active: false, url: 'home'});
            menuData.push({title: 'To-do', active: false, url: 'todo'});
            menuData.push({title: 'About', active: false, url: 'about'});
            menuData.push({title: 'Contact', active: true, url: 'contact'});

            // set menu
            layout.menu.show(new Menu({menuData: menuData}));

            // send model to view, and fill content region of our main app layout view
            layout.content.show(new ContactView({model: contactModel}));

        }
    });

});
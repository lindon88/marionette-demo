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

            // send model to view, and fill content region of our main app layout view
            layout.content.show(new ContactView({model: contactModel}));

        }
    });

});
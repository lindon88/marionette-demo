/**
 * File name: contact.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');
    var tpl = require('text!app/templates/contact/contact.html');

    /**
     * Contact layout view
     */
    return Marionette.LayoutView.extend(AppTrail).extend({
        template: _.template(tpl),
        initialize: function(options){
            this.model = options.model;
        }
    });

});
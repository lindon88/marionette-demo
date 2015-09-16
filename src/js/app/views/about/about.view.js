/**
 * File name: about.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');
    var tpl = require('text!app/templates/about/about.html');

    /**
     * About layout view
     */
    return Marionette.LayoutView.extend(AppTrail).extend({
        template: _.template(tpl),
        initialize: function(options){
            this.model = options.model;
        }
    });

});
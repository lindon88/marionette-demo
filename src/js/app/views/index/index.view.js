/**
 * File name: index.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrail = require('app/trails/app');
    var tpl = require('text!app/templates/index/index.html');

    /**
     * Index layou view
     */
    return Marionette.LayoutView.extend(AppTrail).extend({
        template: _.template(tpl),
        initialize: function(options){
            console.log(options);
            this.model = options.model;
        }
    });

});
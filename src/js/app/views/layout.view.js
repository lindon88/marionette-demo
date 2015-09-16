/**
 * File name: layout.view.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');
    var tpl = require('text!app/templates/layout.html');

    return Marionette.LayoutView.extend(AppTrait).extend({
        el: 'body',
        template: _.template(tpl),
        regions:{
            menu: '#menu',
            content: '#content',
            footer: '#footer'
        }
    });

});
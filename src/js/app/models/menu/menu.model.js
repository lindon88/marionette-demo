/**
 * File name: menu.model.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Backbone = require('backbone');
    var AppTrait = require('app/trails/app');

    /**
     * Menu item model
     */
    return Backbone.Model.extend(AppTrait).extend({
        defaults: {
            title: '',
            active: '',
            url: ''
        }
    });

});
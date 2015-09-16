/**
 * File name: menu.collection.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Backbone = require('backbone');
    var AppTrait = require('app/trails/app');
    var MenuItemModel = require('app/models/menu/menu.model');

    /**
     * Menu collection
     */
    return Backbone.Collection.extend(AppTrait).extend({
        model: MenuItemModel
    });

});
/**
 * File name: menu-collection.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');
    var MenuCollectionModel = require('app/collections/menu/menu.collection');
    var MenuItemView = require('app/views/menu/menu-item.view');

    /**
     * Menu collection view
     */
    return Marionette.CollectionView.extend(AppTrait).extend({
        tagName: 'ul',
        className: 'nav nav-pills',
        collection: MenuCollectionModel,
        childView: MenuItemView,
        initialize: function(){
        }
    });


});
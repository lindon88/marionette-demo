/**
 * File name: menu.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');

    var MenuCollection = require('app/collections/menu/menu.collection');
    var MenuCollectionView = require('app/views/menu/menu-collection.view');

    var tpl = require('text!app/templates/menu/menu.html');

    /**
     * Menu layout view
     */
    return Marionette.LayoutView.extend(AppTrait).extend({
        tagName: 'div',
        template: _.template(tpl),
        menuData: [],

        initialize: function(options){
            this.menuData = options.menuData;
        },

        onRender: function(){

            var menuCollection = new MenuCollection(this.menuData);
            var menuCollectionView = new MenuCollectionView({collection: menuCollection});

            this.$el.html(menuCollectionView.render().el);

        }

    });

});
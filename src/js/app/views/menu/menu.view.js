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

        initialize: function(){
            this.listenTo();
        },

        onRender: function(){

            var menuData = [];
            menuData.push({title: 'Home', active: true, url: 'home'});
            menuData.push({title: 'To-do', active: false, url: 'todo'});
            menuData.push({title: 'About', active: false, url: 'about'});
            menuData.push({title: 'Contact', active: false, url: 'contact'});

            var menuCollection = new MenuCollection(menuData);

            var menuCollectionView = new MenuCollectionView({collection: menuCollection});

            this.$el.html(menuCollectionView.render().el);
        }

    });

});
/**
 * File name: todo.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');

    var TodoView = require('app/views/todo/todo.view');
    var TodoModel = require('app/models/todo/todo.model');

    var Menu = require('app/views/menu/menu.view');

    return Marionette.Controller.extend(AppTrait).extend({
        initialize: function(){
        },

        todoMain: function(){
            var self = this;
            var layout = this.getApp().layout;

            var todoModel = new TodoModel();

            // menu items
            var menuData = [];
            menuData.push({title: 'Home', active: false, url: 'home'});
            menuData.push({title: 'To-do', active: true, url: 'todo'});
            menuData.push({title: 'About', active: false, url: 'about'});
            menuData.push({title: 'Contact', active: false, url: 'contact'});

            // set menu
            layout.menu.show(new Menu({menuData: menuData}));

            layout.content.show(new TodoView({ model: todoModel }));
        }
    });

});
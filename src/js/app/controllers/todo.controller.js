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

    return Marionette.Controller.extend(AppTrait).extend({
        initialize: function(){
            console.log("ToDo controller initialize");
        },

        todoMain: function(){
            console.log("ToDo controller todoMain method!!");
            var self = this;
            var layout = this.getApp().layout;

            var todoModel = new TodoModel();

            layout.content.show(new TodoView({model: todoModel}));
        }
    });

});
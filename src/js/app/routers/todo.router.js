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
    var Controller = require('app/controllers/todo.controller');

    return Marionette.AppRouter.extend({
        controller: new Controller(),
        appRoutes:{
            '': 'todoMain',
            'todo': 'todoMain'
        }
    });

});
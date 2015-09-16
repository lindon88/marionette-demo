/**
 * File name: about.router.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var Controller = require('app/controllers/about.controller');

    /**
     * About router
     */
    return Marionette.AppRouter.extend({
        controller: new Controller(),
        appRoutes:{
            'about': 'home'
        }
    });

});
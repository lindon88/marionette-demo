/**
 * File name: router.service.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');

    // TodoRouter
    var TodoRouter = require('app/routers/todo.router');

    // IndexRouter
    var IndexRouter = require('app/routers/index.router');

    // ContactRouter
    var ContactRouter = require('app/routers/contact.router');

    // AboutRouter
    var AboutRouter = require('app/routers/about.router');

    /**
     * Router service
     */
    return Marionette.Object.extend(AppTrait).extend({
        initRouters: function(app){

            // register routers
            app.routers.push(new IndexRouter());
            app.routers.push(new TodoRouter());
            app.routers.push(new ContactRouter());
            app.routers.push(new AboutRouter());

            var self = this;
            this.getChannel('global').on('goto', function(url){
                self.navigate(url, {trigger: true});
            });

        }
    });

});
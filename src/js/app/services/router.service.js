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

    var TodoRouter = require('app/routers/todo.router');

    return Marionette.Object.extend(AppTrait).extend({
        initRouters: function(app){
            app.routers.push(new TodoRouter());

            var self = this;
            this.getChannel('global').on('goto', function(url){
                console.log('global channel on', 'goto', url);
                self.navigate(url, {trigger: true});
            });

        }
    });

});
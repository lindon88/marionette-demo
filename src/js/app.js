/**
 * File name: app.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    // require Marionette
    var Marionette = require('marionette');

    // require router service
    var RouterService = require('app/services/router.service');

    // require layout service
    var LayoutService = require('app/services/layout.service');

    // initialize Marionette single page app
    return Marionette.Application.extend({
        routers: [],
        initialize: function(){
            console.log("app initialize");
        },

        initApp: function(){

            // initialize router service (register all routers)
            var routerService = new RouterService();
            routerService.initRouters(this);

            // initialize layout
            var layoutService = new LayoutService();
            this.layout = layoutService.initLayout();


            this.on('start', function(){
                console.log('on app start');
                Backbone.history.start({pushState: false, root: '/'});
            });

            return this;
        }

    });


});
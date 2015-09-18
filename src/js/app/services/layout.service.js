/**
 * File name: layout.service.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');
    var Layout = require('app/views/layout.view');

    var Menu = require('app/views/menu/menu.view');

    /**
     * Main app layout view
     */
    return Marionette.Object.extend(AppTrait).extend({
        initLayout: function(){
            var layout = new Layout();
            layout.render();

            // fill regions with views
            //layout.getRegion('menu').show(new Menu());

            return layout;
        }
    });

});
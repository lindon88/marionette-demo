/**
 * File name: app.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    return{
        getApp: function(){
            return Backbone.Radio.channel('global').request('getApp');
        },
        getChannel: function(channel) {
            return Backbone.Radio.channel(channel);
        },
        navigate: function(route, params) {
            Backbone.history.navigate(route, params);
        }
    };

});
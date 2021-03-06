/**
 * File name: contact.model.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Backbone = require('backbone');
    var AppTrail = require('app/trails/app');

    /**
     * Contact model
     */
    return Backbone.Model.extend(AppTrail).extend({
        defaults: {
            'title': '',
            'description': ''
        }
    });

});
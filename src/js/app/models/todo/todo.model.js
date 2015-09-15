/**
 * File name: todo.model.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');

    return Backbone.Model.extend(AppTrait).extend({

        initialize: function(){

        },

        defaults: {
            selected: 'active',
            "history": [
                {
                    id: 1,
                    text: 'go home',
                    status: 'completed'
                }
            ]
        }

    });

});
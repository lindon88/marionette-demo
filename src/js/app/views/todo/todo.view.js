/**
 * File name: todo.view.js
 * Author: Lindon Camaj
 * Date: 9/15/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');

    var tpl = require('text!app/templates/todo/todo.html');

    return Marionette.LayoutView.extend(AppTrait).extend({
        template: _.template(tpl),
        initialize: function(options){
            this.model = options.model;
            console.log(this.model.get("history"));
        }
    });

});
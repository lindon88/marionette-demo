/**
 * File name: menu-item.view.js
 * Author: Lindon Camaj
 * Date: 9/16/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var AppTrait = require('app/trails/app');
    var tpl = require('text!app/templates/menu/menu-item.html');

    /**
     * Menu item view
     */
    return Marionette.ItemView.extend(AppTrait).extend({
        tagName: 'li',
        template: _.template(tpl),
        initialize: function(){},

        onRender: function(){
            var itemStatus = this.model.get('active');
            if(itemStatus == true){
                this.$el.attr('class', 'active');
            }
        }

    });

});
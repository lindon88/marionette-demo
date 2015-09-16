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

        ui:{
            'add': '#addTodo'
        },

        events: {

            'click #addTodo': 'addTodo',
            'click .tab-button': 'tabSelect',
            'click .favorite-item': 'favoriteItem',
            'click .complete-item': 'completeItem',
            'click .remove-item': 'removeItem'
        },

        initialize: function(options){
            this.model = options.model;
            this.listenTo(this.model, 'change', this.render, this);
        },

        /**
         * Add item
         * @param e
         */
        addTodo: function(e){
            var selected = this.model.get("selected");
            var history = this.model.get("history");

            selected = "active";

            var todoName = this.$el.find("#todo-name").val();

            var newItem = { id: history.length + 1, text: todoName, status: 'active' };
            history.push(newItem);

            this.model.set({ selected: selected, history: history });
            this.model.trigger("change");
        },

        /**
         * Select tab
         * @param e
         */
        tabSelect: function(e){
            var selected = this.model.get("selected");

            // remove "active" attribute from old active tab
            this.$el.find('.todo-tab.active').removeClass('active');

            // get current selected tab, and set active tab
            var current = $(e.target);
            current.parent().addClass('active');

            // change selected filter
            selected = current.data('value');
            this.model.set({selected: selected});
            this.model.trigger("change");

        },

        /**
         * Add item in favorites
         * @param e
         */
        favoriteItem: function(e){
            var elementId = $(e.target).data('id');
            this._itemAction('favorite', elementId);
        },

        /**
         * Add item in completed list
         * @param e
         */
        completeItem: function(e){
            var elementId = $(e.target).data('id');
            this._itemAction('completed', elementId);
        },

        /**
         * Remove item
         * @param e
         */
        removeItem: function(e){
            var elementId = $(e.target).data('id');
            this._itemAction('remove', elementId);
        },

        /**
         * Execute action on item
         * @param type
         * @param id
         * @private
         */
        _itemAction:function(type, id){
            var history = this.model.get("history");
            if(type == 'completed' || type == 'favorite'){
                _.each(history, function(item){
                    if(item.id == id){
                        if(item.status == 'favorite' && type == 'favorite'){
                            item.status = 'active';
                        }
                        else{
                            item.status = type;
                        }
                    }
                });

            }

            if(type == 'remove'){
                if(history.length > 1) {
                    history = _.without(history, _.findWhere(history, {id: id}));
                }
                else{
                    history = [];
                }
            }

            this.model.set({history: history});
            this.model.trigger("change");
        }

    });

});
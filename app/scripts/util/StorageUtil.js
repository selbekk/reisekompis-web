(function() {
    'use strict';

    Reisekompis.util.StorageUtil = function() {
        this.put = function(key, value) {
            if(value instanceof Object || value instanceof Array) {
                value = JSON.stringify(value);
            }

            localStorage.setItem(key, value);

            // TODO: If no local storage, gracefully fall back to cookies
        };

        this.get = function(key) {
            var value = localStorage.getItem(key);
            if(!value) {
                return;
            }
            return JSON.parse(value);
        };

        this.getAll = function() {
            var keys = Object.keys(localStorage);
            return $.map(keys, function(key) {
                return JSON.parse(localStorage.getItem(key));
            });
        };

        this.getAllKeys = function() {
            return Object.keys(localStorage);
        };

        this.remove = function(key) {
            localStorage.removeItem(key);
        };


        var init = function() {
            if(!localStorage) {
                console.log('local storage not available');
            }
        };

        init();

    };
}());

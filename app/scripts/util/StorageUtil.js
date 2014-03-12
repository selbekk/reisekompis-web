(function() {
    'use strict';

    Reisekompis.util.StorageUtil = function() {
        this.put = function(key, value) {
            if(value instanceof Object || value instanceof Array) {
                value = JSON.stringify(value);
            }

            localStorage.setItem(key, value);

            // TODO: If no local storage, gracefully fall back
        };

        this.get = function(key) {
            var value = localStorage.getItem(key);
            if(!value) {
                return false;
            }

            return JSON.parse(value);
        };

        this.remove = function(key) {
            localStorage.removeItem(key);
        };
    };
}());

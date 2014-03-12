(function() {
    'use strict';

    Reisekompis.SearchController = function(opts) {
        var $el;

        var view;

        var init = function(opts) {
            $el = opts.$el;

            view = new Reisekompis.SearchView($el);
        };

        init(opts);
    };

}());
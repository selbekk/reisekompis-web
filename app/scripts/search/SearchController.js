(function() {
    'use strict';

    var SearchView = Reisekompis.search.SearchView;
    var SearchRepository = Reisekompis.search.SearchRepository;


    Reisekompis.search.SearchController = function(opts) {
        var $el;

        var repository;

        var view;

        var init = function(opts) {
            $el = opts.$el;

            view = new SearchView($el);
            repository = new SearchRepository();
        };

        init(opts);
    };

}());
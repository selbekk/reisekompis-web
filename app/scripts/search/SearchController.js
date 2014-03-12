(function() {
    'use strict';

    var SearchView = Reisekompis.search.SearchView;
    var SearchResultView = Reisekompis.search.SearchResultView;
    var SearchRepository = Reisekompis.search.SearchRepository;


    Reisekompis.search.SearchController = function(opts) {
        var $el;

        var repository;
        var view;

        var showSearchResults = function(event) {
            history.pushState({}, 'some text', '/search/');

            view.destroy();
            view = new SearchResultView($el, event.response);
        };

        var showSearchBox = function() {

        };

        var initEvents = function() {
            $(document).on('SearchForStopsReceived', showSearchResults);
            $(document).on('ShowSearch', showSearchBox);
        };

        var init = function(opts) {
            $el = opts.$el;

            view = new SearchView($el);
            repository = new SearchRepository();
        };

        init(opts);
        initEvents();
    };

}());
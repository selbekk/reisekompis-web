(function() {
    'use strict';

    var SearchView = Reisekompis.search.SearchView;
    var SearchResultView = Reisekompis.search.SearchResultView;
    var SearchRepository = Reisekompis.search.SearchRepository;

    Reisekompis.search.SearchController = function(opts) {
        var $el;

        var repository;
        var view;

        // search box
        var showSearchBox = function() {
            console.log('showing search box');
            var opts = {
                title: 'Reisekompis'
            };

            changeView(SearchView, opts);
        };

        // search results
        var showSearchResults = function(event) {
            var opts = {
                data: event.response,
                title: 'Søkeresultat'
            };
            changeView(SearchResultView, opts);
        };

        var changeView = function(View, opts) {
            view.destroy();
            view = new View($el, opts.data);
            view.show();
        };

        var initEvents = function() {
            $(document).on('SearchForStopsReceived', showSearchResults);
            $(document).on('ShowSearch', showSearchBox);
        };

        var init = function(opts) {
            $el = opts.$el;
            view = new SearchView($el);
            repository = new SearchRepository();
            initEvents();
        };

        init(opts);
    };

}());
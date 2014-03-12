(function() {
    'use strict';

    var SearchView = Reisekompis.search.SearchView;
    var SearchResultView = Reisekompis.search.SearchResultView;
    var SearchRepository = Reisekompis.search.SearchRepository;
    var ViewChanged = Reisekompis.events.ViewChanged;


    Reisekompis.search.SearchController = function(opts) {
        var $el;

        var repository;
        var view;

        var showSearchResults = function(event) {
            //history.pushState({}, 'some text', '/search/');

            var opts = {
                data: event.response,
                title: 'Søkeresultat'
            };
            changeView(SearchResultView, opts);
        };

        var showSearchBox = function() {
            var opts = {
                title: 'Reisekompis'
            };

            changeView(SearchView, opts);
        };

        var changeView = function(View, opts) {
            view.destroy();
            view = new View($el, opts.data);
            $.event.trigger(new ViewChanged(opts));
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

            changeView(SearchView, {});
        };

        init(opts);
        initEvents();
    };

}());
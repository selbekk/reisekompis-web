(function() {
    'use strict';

    var SearchForStopsRequest = Reisekompis.events.SearchForStopsRequest;
    var Spinner = Reisekompis.util.Spinner;

    Reisekompis.search.SearchView = function(pView) {

        var template = JST['app/scripts/search/templates/SearchTemplate.hb'];

        var $el;

        var bindTemplateEvents = function() {
            $el.on('click', '#searchButton', formHandler);
            $el.on('keypress', '#searchField', formHandler);
        };

        var formHandler = function(event) {
            if( event.keyCode !== 13 ) {
                return;
            }

            event.preventDefault();

            var query = $el.find('#searchField').val();
            search(query);
        };

        var search = function(query) {
            $(document).on('SearchForStopsResponse', searchResultReceived);
            startLoading();
            $.event.trigger(new SearchForStopsRequest(query));
        };

        var searchResultReceived = function(event) {
            $(document).off('SearchForStopsResponse', searchResultReceived);
            stopLoading();

            var stops = event.response;
            console.log(stops);
        };

        var startLoading = function() {
            $el.append(new Spinner({loading: true, large: true}));
        };

        var stopLoading = function() {
            $el.remove('.spinner');
        };

        var render = function() {
            var texts = {
                title: 'Hvor skal du reise fra?',
                placeholder: 'f.eks. Majorstuen',
                searchButton: 'søk'
            };
            $el.html(template(texts));

            bindTemplateEvents();
        };

        var init = function(pView) {
            $el = pView;
            render();
        };

        init(pView);
    };
}());
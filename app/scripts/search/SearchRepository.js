(function() {
    'use strict';

    var SearchForStopsResponse = Reisekompis.events.SearchForStopsReceived;
    var SearchResult = Reisekompis.search.SearchResult;
    var settings = Reisekompis.settings;

    var AjaxService = Reisekompis.util.AjaxService;

    Reisekompis.search.SearchRepository = function() {
        var ajax = new AjaxService();

        var searchForCustomers = function(event) {
            var query = $.trim(event.query);
            var url = settings.SERVICE_URL + '/search/' + query;

            ajax.get(url, SearchResult, searchForCustomersSuccess);
        };

        var searchForCustomersSuccess = function(data) {
            $.event.trigger(new SearchForStopsResponse(data));
        };

        var initEvents = function() {
            $(document).on('SearchForStopsRequested', searchForCustomers);
        };

        var init = function() {
            initEvents();
        };

        init();

    };

}());
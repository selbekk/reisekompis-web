(function() {
    'use strict';

    var SearchForStopsResponse = Reisekompis.events.SearchForStopsReceived;
    var SearchResult = Reisekompis.search.SearchResult;
    var settings = Reisekompis.settings;


    Reisekompis.search.SearchRepository = function() {
        var ajaxService;

        var searchForCustomers = function(event) {
            var query = $.trim(event.query);
            var url = settings.SERVICE_URL + '/search/' + query;

            ajaxService.get(url, SearchResult, searchForCustomersSuccess);
        };

        var searchForCustomersSuccess = function(data) {
            $.event.trigger(new SearchForStopsResponse(data));
        };

        var initEvents = function() {
            $(document).on('SearchForStopsRequested', searchForCustomers);
        };

        var init = function() {
            ajaxService = new Reisekompis.util.AjaxService();
            initEvents();
        };

        init();

    };

}());
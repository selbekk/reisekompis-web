(function() {
    'use strict';

    Reisekompis.dashboard.DashboardRepository = function() {
        var storageUtil;
        var ajaxService;

        var fetchNextDepartures = function() {
            var requestedDepartures = $.map(storageUtil.getAll(), function(stop) {
                return {
                    id: stop.id,
                    lines: stop.selectedLines
                };
            });

            var url = Reisekompis.settings.SERVICE_URL + '/poll';
            ajaxService.post(url, requestedDepartures, Reisekompis.dashboard.Departure, departuresFetched);
        };

        var departuresFetched = function(data) {
            $.event.trigger(new Reisekompis.events.DeparturesFetched(data.departures));
        };

        var initEvents = function() {
            $(document).on('DeparturesRequested', fetchNextDepartures);
        };

        var init = function() {
            storageUtil = new Reisekompis.util.StorageUtil();
            ajaxService = new Reisekompis.util.AjaxService();

            initEvents();
        };

        init();
    };
}());
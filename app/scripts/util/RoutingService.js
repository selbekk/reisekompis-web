(function() {
    'use strict';

    Reisekompis.util.RoutingService = function() {

        var handleRoutes = function() {
            routie({
                'search/:query': function(query) {
                    query = $.trim(query);
                    $.event.trigger(new Reisekompis.events.UpdateHeader('Søkeresultat'));
                    $.event.trigger(new Reisekompis.events.SearchForStopsRequested(query));
                },
                'search': function() {
                    $.event.trigger(new Reisekompis.events.UpdateHeader('Finn stoppestedet'));
                    $.event.trigger(new Reisekompis.events.ShowSearch());
                },
                'dashboard': function() {
                    $.event.trigger(new Reisekompis.events.UpdateHeader('Dine stoppesteder'));
                    $.event.trigger(new Reisekompis.events.ShowDashboard());
                },
                '': function() {
                    console.log('index route');
                },
                '*': function() { // Catch all
                    console.log('route not found.');
                }
            });
        };

        handleRoutes();
    };
}());
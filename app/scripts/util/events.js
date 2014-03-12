(function() {

    'use strict';

    Reisekompis.events.SearchForStopsRequested = function(query) {
        return {
            type: 'SearchForStopsRequested',
            query: query
        };
    };

    Reisekompis.events.SearchForStopsReceived = function(response) {
        return {
            type: 'SearchForStopsReceived',
            response: response
        };
    };
}());
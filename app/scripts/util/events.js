(function() {

    'use strict';

    Reisekompis.events.SearchForStopsRequest = function(query) {
        return {
            type: 'SearchForStopsRequest',
            query: query
        };
    };

    Reisekompis.events.SearchForStopsResponse = function(response) {
        return {
            type: 'SearchForStopsResponse',
            response: response
        };
    };
}());
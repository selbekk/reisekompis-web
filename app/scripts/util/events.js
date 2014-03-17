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

    Reisekompis.events.DeparturesRequested = function() {
        return {
            type: 'DeparturesRequested'
        };
    };

    Reisekompis.events.DeparturesFetched = function(departures) {
        return {
            type: 'DeparturesFetched',
            departures: departures
        };
    };

    Reisekompis.events.ShowSearch = function() {
        return {
            type: 'ShowSearch'
        };
    };

    Reisekompis.events.ShowDashboard = function() {
        return {
            type: 'ShowDashboard'
        };
    };

    Reisekompis.events.UpdateHeader = function(title) {
        return {
            type: 'UpdateHeader',
            title: title
        };
    };
}());
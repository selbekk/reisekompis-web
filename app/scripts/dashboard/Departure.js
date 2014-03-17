(function() {
    'use strict';

    Reisekompis.dashboard.Departure = function(obj) {
        this.id = obj.id;
        this.stopId = obj.stopId;
        this.destination = obj.destination;
        this.time = new Date(obj.time);
    };
}());
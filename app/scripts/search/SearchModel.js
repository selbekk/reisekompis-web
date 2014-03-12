(function() {
    'use strict';

    Reisekompis.search.SearchResult = function(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.district = obj.district;
        this.lines = obj.lines;
    };
}());

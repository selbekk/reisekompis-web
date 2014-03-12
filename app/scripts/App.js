(function() {
    'use strict';

    var search = Reisekompis.search;

    Reisekompis.App = function(opts) {

        var searchController;

        var init = function(opts) {
            var defaults = {
                el: $('#app')
            };

            opts = _.extend(defaults, opts);

            // Show first view

            searchController = new search.SearchController({$el: opts.el});

        };

        init(opts);
    };

}());
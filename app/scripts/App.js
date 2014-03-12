(function() {
    'use strict';

    var search = Reisekompis.search;
    var Header = Reisekompis.header.Header;

    Reisekompis.App = function(opts) {

        var header;
        var searchController;

        var init = function(opts) {
            var defaults = {
                el: $('#app'),
                headerEl: $('#header')
            };

            opts = _.extend(defaults, opts);

            // Show first view

            searchController = new search.SearchController({$el: opts.el});
            header = new Header(opts.headerEl);
        };

        init(opts);
    };

}());
(function() {
    'use strict';

    var Header = Reisekompis.header.Header;

    Reisekompis.App = function(opts) {

        var header;
        var searchController;
        var dashboardController;
        var router;

        var init = function(opts) {
            var defaults = {
                el: $('#app'),
                headerEl: $('#header')
            };

            opts = _.extend(defaults, opts);

            router = new Reisekompis.util.RoutingService();
            header = new Header(opts.headerEl);

            searchController = new Reisekompis.search.SearchController({$el: opts.el});
            dashboardController = new Reisekompis.dashboard.DashboardController({$el: opts.el});

            if( !window.location.hash ) {
                routie('search');
            }
        };

        init(opts);
    };

}());
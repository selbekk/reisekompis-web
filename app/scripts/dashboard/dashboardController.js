(function() {
    'use strict';

    Reisekompis.dashboard.DashboardController = function(opts) {
        var repository;
        var view;

        var $el;

        var showDashboard = function() {
            $.event.trigger(new Reisekompis.events.DeparturesRequested());
        };


        var initEvents = function() {
            $(document).on('ShowDashboard', showDashboard);
        };

        var init = function(opts) {
            $el = opts.$el;
            view = new Reisekompis.dashboard.DashboardView($el);
            repository = new Reisekompis.dashboard.DashboardRepository();

            initEvents();
        };

        init(opts);
    };

}());
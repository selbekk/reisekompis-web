(function() {
    'use strict';

    Reisekompis.dashboard.DashboardView = function(pView) {
        var $el;

        var template = JST['app/scripts/dashboard/templates/DashboardTemplate.hb'];

        var departuresReceived = function(event) {
            console.log(event.departures);

            $el.html(template(event));
        };

        var initEvents = function() {
            $(document).on('DeparturesReceived', departuresReceived);
        };

        var init = function(pView) {
            $el = pView;

            initEvents();
        };

        init(pView);
    };
}());

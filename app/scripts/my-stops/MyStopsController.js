(function() {
    'use strict';

    var MyStopsView = Reisekompis.myStops.MyStopsView;
    var ViewChanged = Reisekompis.events.ViewChanged;

    Reisekompis.myStops.MyStopsController = function(pView) {

        var $el;
        var currentView;

        var showMyStops = function() {
            var opts = {
                title: 'Mine holdeplasser'
            };

            changeView(MyStopsView, opts);
        };

        var changeView = function(View, opts) {
            currentView.destroy();
            currentView = new View($el, opts.data);
            $.event.trigger(new ViewChanged(opts));
            currentView.show();
        };

        var init = function(pView) {
            $el = pView;
            showMyStops();
        };

        init(pView);
    };
}());
(function() {

    'use strict';

    Reisekompis.header.Header = function(pView) {

        var $el;
        var template = JST['app/scripts/header/templates/HeaderTemplate.hb'];

        var $leftNav;
        var $rightNav;

        var render = function(opts) {
            var defaults = {
                title: 'Reisekompis',
                leftNav: undefined,
                rightNav: undefined
            };

            opts = _.extend({}, defaults, opts);

            $el.html(template(opts));

            $leftNav = $el.find('.left-nav');
            $rightNav = $el.find('.right-nav');

            // TODO: add event listeners to navigation
        };

        var updateHeader = function(event) {
            render(event);
        };

        var initEvents = function() {
            $(document).on('UpdateHeader', updateHeader);
        };

        var init = function(pView) {
            $el = pView;
            initEvents();
            render();
        };

        init(pView);
    };
}());

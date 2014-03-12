(function() {
    'use strict';

    Reisekompis.SearchView = function(pView) {

        var template = JST['app/scripts/search/templates/SearchTemplate.hb'];

        var $el;

        var render = function() {
            var texts = {
                title: 'Hvor skal du reise fra?',
                placeholder: 'f.eks. Majorstuen',
                searchButton: 'søk'
            };
            $el.html(template(texts));
        };

        var init = function(pView) {
            $el = pView;
            render();
        };

        init(pView);
    };
}());
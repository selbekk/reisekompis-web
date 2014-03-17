(function() {
    'use strict';

    Reisekompis.search.SearchView = function(pView) {

        var template = JST['app/scripts/search/templates/SearchTemplate.hb'];
        var $el;

        this.destroy = function() {
            // TODO: destroy
        };

        this.show = function() {
            render();
        };

        var bindTemplateEvents = function() {
            $el.on('click', '#search-button', formHandler);
            $el.on('keypress', '#search-field', formHandler);
        };

        var formHandler = function(event) {
            if( event.keyCode !== 13 ) {
                return;
            }

            event.preventDefault();
            var query = $el.find('#search-field').val();

            routie('search/' + query);
        };

        var render = function() {
            var texts = {
                title: 'Hvor skal du reise fra?',
                placeholder: 'f.eks. Majorstuen',
                searchButton: '&#xf002;'
            };
            $el.html(template(texts));

            bindTemplateEvents();
        };

        var init = function(pView) {
            $el = pView;
        };

        init(pView);
    };
}());
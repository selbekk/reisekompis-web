(function() {
    'use strict';

    var SearchForStopsRequest = Reisekompis.events.SearchForStopsRequested;
    var Spinner = Reisekompis.util.Spinner;

    Reisekompis.search.SearchView = function(pView) {

        var template = JST['app/scripts/search/templates/SearchTemplate.hb'];
        var $el;

        this.destroy = function() {
            // TODO: destroy
        };

        var bindTemplateEvents = function() {
            $el.on('click', '#searchButton', formHandler);
            $el.on('keypress', '#searchField', formHandler);
        };

        var formHandler = function(event) {
            if( event.keyCode !== 13 ) {
                return;
            }

            event.preventDefault();

            var query = $el.find('#searchField').val();
            search(query);
        };

        var search = function(query) {
            startLoading();
            $.event.trigger(new SearchForStopsRequest(query));
        };


        var startLoading = function() {
            $el.append(new Spinner({loading: true, large: true}));
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
            render();
        };

        init(pView);
    };
}());
(function() {
    'use strict';

    var storageUtil = new Reisekompis.util.StorageUtil();

    Reisekompis.search.SearchResultView = function(pView, results) {
        var $el;
        var searchResults;

        var template = JST['app/scripts/search/templates/SearchResultsTemplate.hb'];

        var render = function() {
            $el.html(template(searchResults));

            bindTemplateEvents();
        };

        var bindTemplateEvents = function() {
            $el.on('click', '.stop', toggleStop);
        };

        var toggleStop = function() {
            var $stop = $(this);
            var stopId = $stop.data('id');

            if($stop.hasClass('selected')) {
                removeStop(stopId);
            }
            else {
                saveStop(stopId);
            }

            $stop.toggleClass('selected');
        };

        var saveStop = function(id) {
            storageUtil.put(id, {});
        };

        var removeStop = function(id) {
            storageUtil.remove(id);
        };

        var init = function(pView, results) {
            $el = pView;
            searchResults = results;
            render();
        };

        init(pView, results);
    };
}());
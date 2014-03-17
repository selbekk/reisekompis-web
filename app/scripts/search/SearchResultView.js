(function() {
    'use strict';

    var storageUtil = new Reisekompis.util.StorageUtil();

    Reisekompis.search.SearchResultView = function(pView, results) {
        var $el;
        var searchResults;

        var template = JST['app/scripts/search/templates/SearchResultsTemplate.hb'];

        this.destroy = function() {
            // TODO: Destroy
        };

        this.show = function() {
            render();
        };

        var render = function() {
            var savedStops = storageUtil.getAllKeys();
            var preparedData = $.map(searchResults, function(result) {
                if(_.contains(savedStops, result.id + '')) {
                    result.selected = 'selected';
                }

                return result;
            });

            $el.html(template(preparedData));

            bindTemplateEvents();
        };

        var bindTemplateEvents = function() {
            $el.on('click', '.stop', toggleStop);
        };

        var toggleStop = function() {
            var $stop = $(this);
            var stopId = $stop.attr('id').substring(5);

            if($stop.hasClass('selected')) {
                removeStop(stopId);
            }
            else {
                // TODO: save complete stop object
                saveStop(stopId);
            }

            $stop.toggleClass('selected');
        };

        var saveStop = function(id) {
            storageUtil.put(id, 'stop');
        };

        var removeStop = function(id) {
            storageUtil.remove(id);
        };

        var init = function(pView, results) {
            $el = pView;
            searchResults = results;
        };

        init(pView, results);
    };
}());
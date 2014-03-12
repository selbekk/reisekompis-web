(function() {
    'use strict';

    Reisekompis.myStops.MyStopsView = function(opts) {

        var template = JST['app/scripts/my-stops/templates/MyStopsTemplate.hb'];
        var $el;

        var storageUtil;

        this.destroy = function() {

        };

        this.show = function() {
            render();
        };

        var render = function() {
            var opts = {
                stops: getMyStops(),
                description: 'Some description',
                noStopsDescription: 'Du har ikke lagret noen stopp enda'
            };
            $el.html(template(opts));

            bindTemplateEvents();
        };

        var getMyStops = function() {
            return storageUtil.get();
        };

        var removeStop = function() {
            var id = this.id;
            storageUtil.remove(id);
        };

        var bindTemplateEvents = function() {
            $el.on('click', '.delete', removeStop);
        };

        var init = function(opts) {
            $el = opts.el;
            storageUtil = new Reisekompis.util.StorageUtil();
        };

        init(opts);
    };
}());
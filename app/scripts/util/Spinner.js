(function() {

    'use strict';

    Reisekompis.util.Spinner = function(opts) {

        var template = JST['app/scripts/util/templates/SpinnerTemplate.hb'];

        var getSpinner = function(opts) {
            return template(opts);
        };

        getSpinner(opts);
    };

}());
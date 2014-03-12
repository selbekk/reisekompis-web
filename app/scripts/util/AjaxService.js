(function() {

    'use strict';

    Reisekompis.util.AjaxService = function() {

        this.get = function(url, type, callback) {
            return $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                success: function(data) {
                    callback(deserialize(data, type));
                },
                error: ajaxErrorHandler
            });
        };

        var deserialize = function(data, Type) {
            if( data instanceof Array ) {
                var objects = [];
                $.each(data, function(idx, item) {
                    objects.push(new Type(item));
                });
                return objects;
            }
            else if (data instanceof Object) {
                return new Type(data);
            }
            else {
                console.log('Unsupported data format (string, number etc) received from server');
            }
        };

        var ajaxErrorHandler = function(jqXHR, textStatus, errorThrown) {
            console.log('ajax error! textStatus=' + textStatus + ', errorThrown=' + errorThrown);
        };
    };

}());
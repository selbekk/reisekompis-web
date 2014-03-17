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

        this.post = function(url, postData, type, callback) {
            return $.ajax({
                type: 'POST',
                url: url,
                data: JSON.serialize(postData),
                dataType: 'json',
                success: function(data) {
                    callback(deserialize(data, type));
                },
                error: ajaxErrorHandler
            });
        };

        var deserialize = function(data, Type) {
            if( data instanceof Array ) {
                return $.map(data, function(item) {
                    return new Type(item);
                });
            }
            else if (data instanceof Object) {
                return new Type(data);
            }
            console.log('Unsupported data format (string, number etc) received from server');
        };

        var ajaxErrorHandler = function(jqXHR, textStatus, errorThrown) {
            console.log('ajax error! textStatus=' + textStatus + ', errorThrown=' + errorThrown);
        };
    };

}());
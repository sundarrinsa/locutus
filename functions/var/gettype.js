function gettype( mixed_var ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Paulo Ricardo F. Santos
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Douglas Crockford (http://javascript.crockford.com)
    // -    depends on: is_float
    // -    depends on: is_array
    // -    depends on: is_object
    // %        note 1: lacks resource type
    // %        note 2: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 21: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: gettype(1);
    // *     returns 1: 'integer'
    // *     example 2: gettype(undefined);
    // *     returns 2: 'undefined'
    // *     example 3: gettype({0: 'Kevin van Zonneveld'});
    // *     returns 3: 'array'
    // *     example 4: gettype('foo');
    // *     returns 4: 'string'
    // *     example 5: gettype({0: function () {return false;}});
    // *     returns 5: 'array'

    var type;

    var typeOf = function (value) {
        // From: http://javascript.crockford.com/remedial.html
        var s = typeof value;
        if (s === 'object') {
            if (value) {
                if (typeof value.length === 'number' &&
                        !(value.propertyIsEnumerable('length')) &&
                        typeof value.splice === 'function') {
                    s = 'array';
                }
            } else {
                s = 'null';
            }
        }
        return s;
    }

    switch (type = typeOf(mixed_var)) {
        case 'number':
            return (is_float(mixed_var)) ? 'double' : 'integer';
            break;
        case 'object':
        case 'array':
            if (is_array(mixed_var)) {
                return 'array';
            } else if (is_object(mixed_var)) {
                return 'object';
            }
            break;
    }

    return type;
}
module.exports = function strval (str) {
  //  discuss at: http://locutusjs.io/php/strval/
  // original by: Brett Zamir (http://brett-zamir.me)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: strval({red: 1, green: 2, blue: 3, white: 4})
  //   returns 1: 'Object'

  var gettype = require('../var/gettype')
  var type = ''

  if (str === null) {
    return ''
  }

  type = gettype(str)

  // Comment out the entire switch if you want JS-like
  // behavior instead of PHP behavior
  switch (type) {
    case 'boolean':
      if (str === true) {
        return '1'
      }
      return ''
    case 'array':
      return 'Array'
    case 'object':
      return 'Object'
  }

  return str
}
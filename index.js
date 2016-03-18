/*!
 * arr-includes <https://github.com/tunnckoCore/arr-includes>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')
var inArray = require('in-array')

/**
 * > Check any of `values` exists on `arr`. Also works as [in-array][].
 *
 * **Example**
 *
 * ```js
 * var arrIncludes = require('arr-includes')
 *
 * console.log(arrIncludes([1, 'bar', 3], 2)) // => false
 * console.log(arrIncludes([1, 'bar', 3], 3)) // => true
 *
 * console.log(arrIncludes([1, 'bar', 3, true], false)) // => false
 * console.log(arrIncludes([1, 'bar', 3, true], true)) // => true
 *
 * console.log(arrIncludes(['foo', 'bar'], 'baz')) // => false
 * console.log(arrIncludes(['foo', 'bar'], 'foo')) // => true
 *
 * console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'c'])) // => false
 * console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'foo'])) // => true
 * ```
 *
 * @param  {Array} `arr` array to check
 * @param  {Array|String} `values` array or anything that [in-array][] supports.
 * @return {Boolean} always boolean false or true, never throws
 * @api public
 */

module.exports = function arrIncludes (arr, values) {
  if (!isArray(values)) return inArray(arr, values)
  var len = values.length
  var i = 0

  while (i < len) {
    if (inArray(arr, values[i++])) {
      return true
    }
  }
  return false
}
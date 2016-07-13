'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Removes a single attribute (first string argument) or
 * an array of attributes (first array of strings argument) from
 * each element in selector array.
 */

var removeAttr = {
	name: 'removeAttr',
	core: function core($) {
		var _$$arguments = _slicedToArray($.arguments, 2);

		var attrName = _$$arguments[0];
		var attrValue = _$$arguments[1];


		$.when(attrName, {
			isString: function isString() {
				$.forEach(function (element) {
					element.removeAttribute(attrName, attrValue);
				});
			},
			isArray: function isArray() {
				utils.forEach(attrName, function (key) {
					$.forEach(function (element) {
						element.removeAttribute(key);
					});
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = removeAttr;
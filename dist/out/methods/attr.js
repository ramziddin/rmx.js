'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * If first argument is an Object, than the value
 * (second argument) is optional. All the values from
 * Object are set as attributes to every element in selector
 * array.
 *
 * If the first argument and a second argument are Strings,
 * then one attribute with is set to each element in selector
 * array.
 */

var attr = {
	name: 'attr',
	core: function core($) {
		var _$$arguments = _slicedToArray($.arguments, 2);

		var attrName = _$$arguments[0];
		var attrValue = _$$arguments[1];


		$.when(attrName, {
			isString: function isString() {
				$.forEach(function (element) {
					element.setAttribute(attrName, attrValue);
				});
			},
			isObject: function isObject() {
				utils.forEach(Object.keys(attrName), function (key) {
					$.forEach(function (element) {
						element.setAttribute(key, attrName[key]);
					});
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = attr;
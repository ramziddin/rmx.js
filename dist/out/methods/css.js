'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * If first argument is an Object, than the value
 * (second argument) is optional. All the values from
 * Object are set as style properties to every element in selector
 * array.
 *
 * If the first argument and a second argument are Strings,
 * then one style propertie with is set to each element in selector
 * array.
 */

var css = {
	name: 'css',
	core: function core($) {
		var css = $.arguments[0];
		var value = $.arguments[1];
		$.when(css, {
			isObject: function isObject() {
				$.forEach(function (element) {
					utils.forEach(Object.keys(css), function (key) {
						element.style[key] = css[key];
					});
				});
			},
			isString: function isString() {
				$.forEach(function (element) {
					element.style[css] = value;
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = css;
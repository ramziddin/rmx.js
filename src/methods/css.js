/* ========= Modules ========= */

const utils = require('../utils');

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

const css = {
	name: 'css',
	core($) {
		const css = $.arguments[0];
		const value = $.arguments[1];
		$.when(css, {
			isObject() {
				$.forEach((element) => {
					utils.forEach(Object.keys(css), (key) => {
						element.style[key] = css[key];
					});
				});
			},
			isString() {
				$.forEach((element) => {
					element.style[css] = value;
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = css;

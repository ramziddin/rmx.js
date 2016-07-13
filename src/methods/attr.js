/* ========= Modules ========= */

const utils = require('../utils');

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

const attr = {
	name: 'attr',
	core($) {
		let [attrName, attrValue] = $.arguments;

		$.when(attrName, {
			isString() {
				$.forEach((element) => {
					element.setAttribute(attrName, attrValue);
				});
			},
			isObject() {
				utils.forEach(Object.keys(attrName), (key) => {
					$.forEach((element) => {
						element.setAttribute(key, attrName[key]);
					});
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = attr;

/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Removes a single attribute (first string argument) or
 * an array of attributes (first array of strings argument) from
 * each element in selector array.
 */

const removeAttr = {
	name: 'removeAttr',
	core($) {
		let [attrName, attrValue] = $.arguments;

		$.when(attrName, {
			isString() {
				$.forEach((element) => {
					element.removeAttribute(attrName, attrValue);
				});
			},
			isArray() {
				utils.forEach(attrName, (key) => {
					$.forEach((element) => {
						element.removeAttribute(key);
					});
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = removeAttr;

/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Removes a single class (first string argument) or
 * an array of classes (first array of strings argument) from
 * each element in selector array.
 */

const removeClass = {
	name: 'removeClass',
	core($) {
		const className = $.arguments[0];
		const splittedClassName = className.split(/\s+/g);

		$.when(className, {
			isString() {
				$.forEach((element) => {
					utils.forEach(splittedClassName, (className) => {
						element.classList.remove(className);
					});
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = removeClass;

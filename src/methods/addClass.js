/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Takes a class name to be added to all
 * elements in selector array.
 */

const addClass = {
	name: 'addClass',
	core($) {
		const className = $.arguments[0];
		const splittedClassName = className.split(/\s+/g);

		$.when(className, {
			isString() {
				$.forEach((element) => {
					utils.forEach(splittedClassName, (className) => {
						element.classList.add(className);
					});
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = addClass;

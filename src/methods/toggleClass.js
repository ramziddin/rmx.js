/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Toggles class (first string argument) on
 * each element in selector array.
 */

const toggleClass = {
	name: 'toggleClass',
	core($) {
		const className = $.arguments[0];
		const splittedClassName = className.split(/\s+/g);
		$.when(className, {
			isString() {
				$.forEach((element) => {
					utils.forEach(splittedClassName, (className) => {
						element.classList.toggle(className);
					});
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = toggleClass;


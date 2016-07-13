/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Filters selector array by given
 * pattern string.
 */

const filter = {
	name: 'filter',
	core($) {
		const pattern = $.arguments[0];

		$.when(pattern, {
			isString() {
				const result = [];

				$.forEach((element) => {
					if ($.is(element, pattern) === true) result.push(element);
				});

				$.scope.selector = result;
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = filter;

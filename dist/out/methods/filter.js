'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Filters selector array by given
 * pattern string.
 */

var filter = {
	name: 'filter',
	core: function core($) {
		var pattern = $.arguments[0];

		$.when(pattern, {
			isString: function isString() {
				var result = [];

				$.forEach(function (element) {
					if ($.is(element, pattern) === true) result.push(element);
				});

				$.scope.selector = result;
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = filter;
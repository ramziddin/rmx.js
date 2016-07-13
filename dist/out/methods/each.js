'use strict';

/* ========= Core ========= */

/**
 * Iterates over selector array, and passing
 * current element to the callback (handler).
 */

var each = {
	name: 'each',
	core: function core($) {
		if ($.callback) {
			$.forEach(function (element, index) {
				$.callback(element, index);
			});
		}
	}
};

/* ========= Exports ========= */

module.exports = each;
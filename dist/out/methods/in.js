'use strict';

/* ========= Core ========= */

/**
 * Gets an nth element out of selector array
 * based on first integer argument of function.
 */

var _in = {
	name: 'in',
	core: function core($) {
		var inNum = parseInt($.arguments[0], 10);

		$.when(inNum, {
			isNumber: function isNumber() {
				$.scope.selector = $.scope.selector.slice(inNum, inNum + 1);
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = _in;
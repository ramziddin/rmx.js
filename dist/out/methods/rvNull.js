'use strict';

/* ========= Core ========= */

/**
 * Returns true if selector isn't empty,
 * else it returns false.
 */

var Null = {
	name: 'Null',
	core: function core($) {
		$.return = $.scope.selector.length <= 0;
	}
};

/* ========= Exports ========= */

module.exports = Null;
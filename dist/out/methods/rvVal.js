'use strict';

/* ========= Core ========= */

/**
 * Returns value propertie of first
 * element in selector array.
 */

var Val = {
	name: 'Val',
	core: function core($) {
		$.return = $.scope.selector[0].value;
	}
};

/* ========= Exports ========= */

module.exports = Val;
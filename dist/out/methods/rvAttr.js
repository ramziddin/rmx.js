'use strict';

/* ========= Core ========= */

/**
 * Returns a value of attribute of first
 * element in selector array.
 */

var Attr = {
	name: 'Attr',
	core: function core($) {
		$.return = $.scope.selector[0].getAttribute($.arguments[0]);
	}
};

/* ========= Exports ========= */

module.exports = Attr;
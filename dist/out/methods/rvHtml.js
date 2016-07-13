'use strict';

/* ========= Core ========= */

/**
 * Returns an inner html value of
 * first element in selector array.
 */

var Html = {
	name: 'Html',
	core: function core($) {
		$.return = $.scope.selector[0].innerHTML;
	}
};

/* ========= Exports ========= */

module.exports = Html;
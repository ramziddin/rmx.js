'use strict';

/* ========= Core ========= */

/**
 * Gets first element's (in
 * elements array) scroll top
 */

var scrollTop = {
	name: 'ScrollTop',
	core: function core($) {
		var selector = $.scope.selector[0];

		if (selector === document || selector === window) {
			$.return = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
		} else {
			$.return = (selector.pageYOffset || selector.scrollTop) - (selector.clientTop || 0);
		}
	}
};

/* ========= Exports ========= */

module.exports = scrollTop;
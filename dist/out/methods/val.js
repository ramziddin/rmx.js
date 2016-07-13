'use strict';

/* ========= Core ========= */

/**
 * Sets value (first string argument)
 * to each element in selector array.
 */

var val = {
	name: 'val',
	core: function core($) {
		$.when($.arguments[0], {
			isString: function isString() {
				$.forEach(function (element, index) {
					element.value = $.arguments[0];
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = val;
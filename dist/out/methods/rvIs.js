'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Returns boolean value based
 * on equality of pattern and first element
 * in selector array.
 */

var Is = {
	name: 'Is',
	core: function core($) {
		var pattern = $.arguments[0];
		$.when(pattern, {
			isString: function isString() {
				$.return = $.is($.scope.selector[0], pattern);
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = Is;
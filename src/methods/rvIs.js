/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Returns boolean value based
 * on equality of pattern and first element
 * in selector array.
 */

const Is = {
	name: 'Is',
	core($) {
		const pattern = $.arguments[0];
		$.when(pattern, {
			isString() {
				$.return = $.is($.scope.selector[0], pattern);
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = Is;

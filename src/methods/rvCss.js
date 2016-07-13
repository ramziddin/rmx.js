/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * Returns a value of style propertie of first
 * element in selector array.
 */

const Css = {
	name: 'Css',
	core($) {
		const ruleName = $.arguments[0];
		const selector = $.scope.selector[0];

		$.return = selector.style[ruleName];
	},
};

/* ========= Exports ========= */

module.exports = Css;

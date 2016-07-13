'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Returns a value of style propertie of first
 * element in selector array.
 */

var Css = {
	name: 'Css',
	core: function core($) {
		var ruleName = $.arguments[0];
		var selector = $.scope.selector[0];

		$.return = selector.style[ruleName];
	}
};

/* ========= Exports ========= */

module.exports = Css;
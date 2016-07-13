'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Takes a class name to be added to all
 * elements in selector array.
 */

var addClass = {
	name: 'addClass',
	core: function core($) {
		var className = $.arguments[0];
		var splittedClassName = className.split(/\s+/g);

		$.when(className, {
			isString: function isString() {
				$.forEach(function (element) {
					utils.forEach(splittedClassName, function (className) {
						element.classList.add(className);
					});
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = addClass;
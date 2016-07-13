'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Toggles class (first string argument) on
 * each element in selector array.
 */

var toggleClass = {
	name: 'toggleClass',
	core: function core($) {
		var className = $.arguments[0];
		var splittedClassName = className.split(/\s+/g);
		$.when(className, {
			isString: function isString() {
				$.forEach(function (element) {
					utils.forEach(splittedClassName, function (className) {
						element.classList.toggle(className);
					});
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = toggleClass;
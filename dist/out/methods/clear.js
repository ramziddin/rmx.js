'use strict';

/* ========= Core ========= */

/**
 * Clears selector from values
 * that evaluate to false.
 */

var clear = {
	name: 'clear',
	core: function core($) {
		var newSelector = [];

		$.forEach(function (element) {
			if (!!element) {
				newSelector.push(element);
			}
		});

		$.scope.selector = newSelector;
	}
};

/* ========= Exports ========= */

module.exports = clear;
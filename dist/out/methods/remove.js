'use strict';

/* ========= Core ========= */

/**
 * Removes each element in selector array.
 */

var remove = {
	name: 'remove',
	core: function core($) {
		$.forEach(function (element) {
			element.parentNode.removeChild(element);
		});

		$.scope.selector = [];
	}
};

/* ========= Exports ========= */

module.exports = remove;
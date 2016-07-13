'use strict';

/* ========= Core ========= */

/**
 * Removes an event handler from each
 * element in selector array.
 */

var off = {
	name: 'off',
	core: function core($) {
		var eventName = $.arguments[0];

		$.when(eventName, {
			isString: function isString() {
				$.forEach(function (element) {
					element.removeEventListener(eventName, $.scope.Data('events.' + eventName));
					$.scope.dataStorage.events[eventName] = undefined;
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = off;
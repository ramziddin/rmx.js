'use strict';

/* ========= Core ========= */

/**
 * Sets an event handler on each
 * element in selector array.
 * A handler accepts an event object.
 */

var on = {
	name: 'on',
	core: function core($) {
		var eventName = $.arguments[0];

		$.when(eventName, {
			isString: function isString() {
				if ($.callback) {
					$.forEach(function (element) {
						$.scope.data('events.' + eventName, $.callback);
						element.addEventListener($.arguments[0], $.callback);
					});
				}
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = on;
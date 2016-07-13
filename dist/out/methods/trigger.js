'use strict';

/* ========= Core ========= */

/**
 * Triggers even (first string argument)
 * on every element in selector array with
 * a given optional data object.
 */

var trigger = {
	name: 'trigger',
	core: function core($) {
		var event = document.createEvent('Event');
		event.initEvent($.arguments[0], true, true, $.arguments[1] || {});
		$.forEach(function (element) {
			element.dispatchEvent(event);
		});
	}
};

/* ========= Exports ========= */

module.exports = trigger;
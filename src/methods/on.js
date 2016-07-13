/* ========= Core ========= */

/**
 * Sets an event handler on each
 * element in selector array.
 * A handler accepts an event object.
 */

const on = {
	name: 'on',
	core($) {
		const eventName = $.arguments[0];

		$.when(eventName, {
			isString() {
				if ($.callback) {
					$.forEach((element) => {
						$.scope.data('events.' + eventName, $.callback);
						element.addEventListener($.arguments[0], $.callback);
					});
				}
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = on;

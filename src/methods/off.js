/* ========= Core ========= */

/**
 * Removes an event handler from each
 * element in selector array.
 */

const off = {
	name: 'off',
	core($) {
		const eventName = $.arguments[0];

		$.when(eventName, {
			isString() {
				$.forEach((element) => {
					element.removeEventListener(eventName, $.scope.Data('events.' + eventName));
					$.scope.dataStorage.events[eventName] = undefined;
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = off;

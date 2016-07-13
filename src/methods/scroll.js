/* ========= Core ========= */

/**
 * Calls a callback when a scroll event
 * occurs providing a scroll direction
 * to a callback as a second argument.
 * Callback accepts an event object as its
 * first argument.
 */

const scroll = {
	name: 'scroll',
	core ($) {
		let callback = $.arguments[0];
		let selector = $.scope.selector[0];

		if (selector && callback && typeof callback === 'function') {
			let lst = 0;

			$.scope.on('scroll', (event) => {
				let st = $(selector).ScrollTop();

				if (!(st > lst)) {
					callback(event, 'up');
				} else {
					callback(event, 'down');
				}
			});
		}
	},
};

/* ========= Core ========= */

module.exports = scroll;

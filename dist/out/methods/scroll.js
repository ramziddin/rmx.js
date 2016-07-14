'use strict';

/* ========= Core ========= */

/**
 * Calls a callback when a scroll event
 * occurs providing a scroll direction
 * to a callback as a second argument.
 * Callback accepts an event object as its
 * first argument.
 */

var scroll = {
	name: 'scroll',
	core: function core($) {
		var callback = $.arguments[0];
		var selector = $.scope.selector[0];

		if (selector && callback && typeof callback === 'function') {
			(function () {
				var lst = 0;

				$.scope.on('scroll', function (event) {
					var st = $.scope.ScrollTop();

					if (!(st > lst)) {
						callback(event, 'up');
					} else {
						callback(event, 'down');
					}
				});
			})();
		}
	}
};

/* ========= Core ========= */

module.exports = scroll;
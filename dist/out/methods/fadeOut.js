'use strict';

/* ========= Core ========= */

/**
 * Animates a first element in selector array
 * to fade out (opacity to 0, based on given or
 * default fade speed) and then sets display style
 * propertie to none.
 */

var fadeOut = {
	name: 'fadeOut',
	core: function core($) {
		var element = $.scope.selector[0];
		var last = +new Date();

		element.style.opacity = 1;

		function tick() {
			element.style.opacity = +element.style.opacity - (new Date() - last) / (+$.arguments[0] || 500);
			last = +new Date();

			if (+element.style.opacity >= 0) {
				window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
			} else {
				element.style.display = 'none';
				($.callback || function () {})(element);
			}
		}

		tick();
	}
};

/* ========= Exports ========= */

module.exports = fadeOut;
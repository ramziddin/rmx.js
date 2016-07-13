'use strict';

/* ========= Core ========= */

/**
 * Animates a first element in selector array
 * to fade in (opacity to 1, based on given or
 * default fade speed) and then sets display style
 * propertie to nothing.
 */

var fadeIn = {
	name: 'fadeIn',
	core: function core($) {
		var element = $.scope.selector[0];
		var last = +new Date();

		element.style.display = '';
		element.style.opacity = 0;

		function tick() {
			element.style.opacity = +element.style.opacity + (new Date() - last) / (+$.arguments[0] || 500);
			last = +new Date();

			if (+element.style.opacity < 1) {
				window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
			} else {
				($.callback || function () {})(element);
			}
		}

		tick();
	}
};

/* ========= Exports ========= */

module.exports = fadeIn;
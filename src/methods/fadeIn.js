/* ========= Core ========= */

/**
 * Animates a first element in selector array
 * to fade in (opacity to 1, based on given or
 * default fade speed) and then sets display style
 * propertie to nothing.
 */

const fadeIn = {
	name: 'fadeIn',
	core($) {
		const element = $.scope.selector[0];
		let last = +new Date();

		element.style.display = '';
		element.style.opacity = 0;

		function tick() {
			element.style.opacity = +element.style.opacity + (new Date() - last) / (+$.arguments[0] || 500);
			last = +new Date();

			if (+element.style.opacity < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			} else {
				($.callback || (() => {}))(element);
			}
		}

		tick();
	},
};

/* ========= Exports ========= */

module.exports = fadeIn;

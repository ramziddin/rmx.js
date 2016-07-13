/* ========= Core ========= */

/**
 * Sets inner html to first argument string
 * on every element in selector array.
 */

const html = {
	name: 'html',
	core($) {
		$.when($.arguments[0], {
			isString() {
				$.forEach((element, index) => {
					element.innerHTML = $.arguments[0];
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = html;

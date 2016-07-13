/* ========= Core ========= */

/**
 * Sets value (first string argument)
 * to each element in selector array.
 */

const val = {
	name: 'val',
	core($) {
		$.when($.arguments[0], {
			isString() {
				$.forEach((element, index) => {
					element.value = $.arguments[0];
				});
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = val;

/* ========= Core ========= */

/**
 * Iterates over selector array, and passing
 * current element to the callback (handler).
 */

const each = {
	name: 'each',
	core($) {
		if ($.callback) {
			$.forEach((element, index) => {
				$.callback(element, index);
			});
		}
	},
};

/* ========= Exports ========= */

module.exports = each;

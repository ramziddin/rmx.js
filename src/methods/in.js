/* ========= Core ========= */

/**
 * Gets an nth element out of selector array
 * based on first integer argument of function.
 */

const _in = {
	name: 'in',
	core($) {
		const inNum = parseInt($.arguments[0], 10);

		$.when(inNum, {
			isNumber() {
				$.scope.selector = $.scope.selector.slice(inNum, inNum + 1);
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = _in;

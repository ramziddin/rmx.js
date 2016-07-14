/* ========= Core ========= */

/**
 * Returns true if selector isn't empty,
 * else it returns false.
 */

const Null = {
	name: 'Null',
	core($) {
		$.scope.clear();
		$.return = $.scope.selector.length <= 0;
	},
};

/* ========= Exports ========= */

module.exports = Null;

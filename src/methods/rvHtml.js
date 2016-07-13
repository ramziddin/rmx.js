/* ========= Core ========= */

/**
 * Returns an inner html value of
 * first element in selector array.
 */

const Html = {
	name: 'Html',
	core($) {
		$.return = $.scope.selector[0].innerHTML;
	},
};

/* ========= Exports ========= */

module.exports = Html;

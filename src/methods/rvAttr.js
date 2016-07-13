/* ========= Core ========= */

/**
 * Returns a value of attribute of first
 * element in selector array.
 */

const Attr = {
	name: 'Attr',
	core($) {
		$.return = $.scope.selector[0].getAttribute($.arguments[0]);
	},
};

/* ========= Exports ========= */

module.exports = Attr;

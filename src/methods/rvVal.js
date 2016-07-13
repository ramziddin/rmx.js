/* ========= Core ========= */

/**
 * Returns value propertie of first
 * element in selector array.
 */

const Val = {
	name: 'Val',
	core($) {
		$.return = $.scope.selector[0].value;
	},
};

/* ========= Exports ========= */

module.exports = Val;

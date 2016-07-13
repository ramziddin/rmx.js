/* ========= Core ========= */

/**
 * Removes each element in selector array.
 */

const remove = {
	name: 'remove',
	core($) {
		$.forEach((element) => {
			element.parentNode.removeChild(element);
		});

		$.scope.selector = [];
	},
};

/* ========= Exports ========= */

module.exports = remove;

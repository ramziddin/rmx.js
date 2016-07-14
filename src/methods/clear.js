/* ========= Core ========= */

/**
 * Clears selector from values
 * that evaluate to false.
 */

const clear = {
	name: 'clear',
	core($) {
		let newSelector = [];

		$.forEach(function (element) {
			if (!!element)
				newSelector.push(element);
		});

		$.selector = newSelector;
	},
};

/* ========= Exports ========= */

module.exports = clear;

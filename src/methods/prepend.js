/* ========= Modules ========= */

const fetchselector = require('../fetchselector');
const utils = require('../utils');

/* ========= Core ========= */

/**
 * .append(RMX...)
 *
 * Prepend a RMX element to each element
 * in selector array.
 */

const prepend = {
	name: 'prepend',
	core($) {
		$.forEach(($element) => {
			utils.forEach($.arguments, (element) => {
				utils.forEach(fetchselector(element), (element) => {
					$element.insertBefore(element, $element.firstChild);
				});
			});
		});
	},
};

/* ========= Exports ========= */

module.exports = prepend;

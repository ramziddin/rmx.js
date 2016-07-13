/* ========= Modules ========= */

const fetchselector = require('../fetchselector');
const utils = require('../utils');

/* ========= Core ========= */

/**
 * Append a RMX element to each element
 * in selector array.
 */

const append = {
	name: 'append',
	core($) {
		$.forEach(($element) => {
			utils.forEach($.arguments, (element) => {
				utils.forEach(fetchselector(element), (element) => {
					$element.appendChild(element);
				});
			});
		});
	},
};


/* ========= Exports ========= */

module.exports = append;

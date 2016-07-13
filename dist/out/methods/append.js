'use strict';

/* ========= Modules ========= */

var fetchselector = require('../fetchselector');
var utils = require('../utils');

/* ========= Core ========= */

/**
 * Append a RMX element to each element
 * in selector array.
 */

var append = {
	name: 'append',
	core: function core($) {
		$.forEach(function ($element) {
			utils.forEach($.arguments, function (element) {
				utils.forEach(fetchselector(element), function (element) {
					$element.appendChild(element);
				});
			});
		});
	}
};

/* ========= Exports ========= */

module.exports = append;
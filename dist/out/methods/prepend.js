'use strict';

/* ========= Modules ========= */

var fetchselector = require('../fetchselector');
var utils = require('../utils');

/* ========= Core ========= */

/**
 * .append(RMX...)
 *
 * Prepend a RMX element to each element
 * in selector array.
 */

var prepend = {
	name: 'prepend',
	core: function core($) {
		$.forEach(function ($element) {
			utils.forEach($.arguments, function (element) {
				utils.forEach(fetchselector(element), function (element) {
					$element.insertBefore(element, $element.firstChild);
				});
			});
		});
	}
};

/* ========= Exports ========= */

module.exports = prepend;
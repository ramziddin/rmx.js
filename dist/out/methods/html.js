'use strict';

/* ========= Core ========= */

/**
 * Sets inner html to first argument string
 * on every element in selector array.
 */

var html = {
	name: 'html',
	core: function core($) {
		$.when($.arguments[0], {
			isString: function isString() {
				$.forEach(function (element, index) {
					element.innerHTML = $.arguments[0];
				});
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = html;
'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Triggers swipe event
 * on an element with given
 * optional data object.
 */

var triggerSwipe = {
	name: 'triggerSwipe',
	core: function core($) {
		var _$$arguments = $.arguments;
		var direction = _$$arguments.direction;
		var data = _$$arguments.data;

		$.scope.Data('events.swipe')(utils.extend(data, direction));
	}
};

/* ========= Exports ========= */

module.exports = triggerSwipe;
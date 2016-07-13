'use strict';

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * Determines a swipe direction
 * on a first element of selector array
 * and passes a direction
 * as a string to the second argument
 * of swipe event handler.
 */

var swipe = {
	name: 'swipe',
	core: function core($) {
		var touchsurface = $.scope.selector[0];
		var swipedir = void 0;
		var startX = void 0;
		var startY = void 0;
		var distX = void 0;
		var disY = void 0;
		var _$$arguments$ = $.arguments[0];
		var _$$arguments$$thrshol = _$$arguments$.thrshold;
		var thrshold = _$$arguments$$thrshol === undefined ? 150 : _$$arguments$$thrshol;
		var _$$arguments$$restain = _$$arguments$.restaint;
		var restaint = _$$arguments$$restain === undefined ? 100 : _$$arguments$$restain;
		var _$$arguments$$allowed = _$$arguments$.allowedTime;
		var allowedTime = _$$arguments$$allowed === undefined ? 300 : _$$arguments$$allowed;

		var elapsedTime = void 0;
		var startTime = void 0;
		var noop = function noop() {};

		$.scope.on('touchstart', function (event) {
			var touchobject = event.changedTouches[0];
			swipe = 'none';
			dist = 0;
			startX = touchobject.pageX;
			startY = touchobject.pageY;
			startTime = new Date().getTime();

			event.preventDefault();
		});

		$.scope.on('touchmove', function (event) {
			return event.preventDefault();
		}, false);

		$.scope.on('touchend', function (event) {
			var touchobject = event.changedTouches[0];
			distX = touchobject.pageX - startX;
			distY = touchobject.pageY - startY;

			if (elapsedTime <= allowedTime) {
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
					swipedir = distX < 0 ? 'left' : 'right';
				} else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
					swipedir = distY < 0 ? 'up' : 'down';
				}
			}

			$.callback(utils.extend({
				data: {
					direction: swipedir
				}
			}, event));
			event.preventDefault();
		});
	}
};

/* ========= Exports ========= */

module.exports = swipe;
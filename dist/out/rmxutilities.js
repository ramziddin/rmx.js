'use strict';

/**
 * Set of tools used by Rmx's methods.
 */

/* ========= Modules ========= */

var Rmx = require('./rmxclass');
var utils = require('./utils');
var rmxUtilitiesLogger = utils.logger('rmxutilities');

/* ========= Core ========= */

/**
 * A function that bases on given
 * Rmx instance's scope and given data.
 */

function rmxutils(scope, data) {
	/**
  * Object that contains all the exported
  * utilities.
  */
	var exportUtils = {};

	/**
  * Scope is exported for methods as well
  * to deal with elements directly.
  */
	exportUtils.scope = scope;

	/**
  * Port of utils.forEach to rmx utilities
  * based on selector array.
  */

	function forEach(handler) {
		utils.forEach(scope.selector, handler.bind(scope));
		return exportUtils;
	}

	exportUtils.forEach = forEach;

	/**
  * Arguments passed to method.
  */

	exportUtils.arguments = data.arguments;

	/**
  * Callback on method.
  */

	var callbackFn = data.arguments[data.arguments.length - 1];

	function callback() {
		callbackFn.apply(scope, arguments);
		return exportUtils;
	}

	if (utils.fullTypeOf(callbackFn) === 'Function' ? callbackFn : false) {
		exportUtils.callback = callback;
	}

	/**
  * Alias to utils.typeOf.
  */

	function typeOf(object) {
		return utils.fullTypeOf(object);
	}

	exportUtils.typeOf = typeOf;

	/**
  * A function that behaves as a switch based
  * on types of objects.
  */

	function when(object, events) {
		var type = utils.fullTypeOf(object);
		(events[type] || events['is' + type] || function () {}).call(scope);
	}

	exportUtils.when = when;

	/**
  * Returns true if selector isn't empty,
  * else it returns false.
  */

	function isNull() {
		return scope.selector.length <= 0;
	}

	exportUtils.isNull = isNull;

	/**
  * Compares an element with a given pattern.
  */

	function is(element, pattern) {
		if (element && utils.fullTypeOf(pattern) === 'String') {
			return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, pattern);
		} else {
			return false;
		}
	}

	exportUtils.is = is;

	/**
  * A return value of an unsafe function.
  */

	exportUtils.return = null;

	/**
  * Export utilities.
  */

	return exportUtils;
}

/* ========= Exports ========= */

module.exports = rmxutils;
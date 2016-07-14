'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Set of tools used by the source code by itself,
 * rather than Rmx's methods.
 */

/* ========= Core ========= */

/**
 * Just an alias.
 */

var toString = Object.prototype.toString;

/**
 * Polyfill for checking if an object
 * is type of array.
 */

var isArray = Array.isArray || function isArrayPolyfill(object) {
	return toString.call(object) === '[object Array]';
};

/**
 * Returns exact type of an object as a string.
 */

function fullTypeOf(object) {
	return toString.call(object).slice(8, -1);
}

/**
 * Returns type of an object as a string.
 */

function typeOf(object) {
	return isArray(object) ? 'array' : typeof object === 'undefined' ? 'undefined' : _typeof(object);
}

/**
 * A function for logging messages.
 */

function logger(module) {
	var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	return {
		module: module,
		new: function _new(newModule) {
			var newSettings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			return logger(module + ' -> ' + newModule, newSettings);
		},
		log: function log(message) {
			if (fullTypeOf(message) === 'String' && (settings.quite !== 1 || settings.quite !== 3)) {
				console.log('[' + module + '] info: ' + message);
			}
		},
		error: function error(message) {
			if (fullTypeOf(message) === 'String' && (settings.quite !== 2 || settings.quite !== 3)) {
				console.error('[' + module + '] error: ' + message);
			}
		}
	};
}

/**
 * A function for iterating through an
 * array and passing current element to handler.
 */

function forEach(array, handler) {
	var calculatedIndex = 0;
	for (var l = array.length, index = l; index !== 0; --index) {
		calculatedIndex = l - index;
		handler(array[calculatedIndex], calculatedIndex);
	}
}

/**
 * A recursive object for extending one
 * object by another.
 *
 * If both extender and extendable are objects
 * a function is calls itself with new arguments,
 * until one of the arguments isn't an Object.
 *
 * If an extender or extendable is not an object, then:
 * 	If overwrite option is set - on, then extendable object
 * 	overwrites its propertie by extender's propertie's value.
 *
 *  If overwrite option is set - off, then extendable object
 *  does not overwrite its propertie by extendable's propertie,
 *  until extendable's propertie evaluates to true.
 */

function extend() {
	var extender = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	var extendable = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	var overwrite = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	forEach(Object.keys(extender), function (element, index) {
		if (fullTypeOf(extender[element]) === 'Object' && fullTypeOf(extendable[element]) === 'Object') {
			extendable[element] = extend(extender[element], extendable[2], overwrite);
		} else {
			if (overwrite) {
				extendable[element] = extender[element];
			} else {
				extendable[element] = extendable[element] || extender[element];
			}
		}
	});
	return extendable;
}

/**
 * Executes a value out of data object by a given pointer.
 */

function executePointer(pointer) {
	var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	var result = void 0;
	forEach(pointer.split('.'), function (element, index) {
		if (index === 0) result = data[element];else result = result[element];
	});
	return result;
}

/**
 * Writes a value to data object to a given pointer.
 */

function writePointer() {
	var pointer = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	var data = arguments[1];
	var value = arguments[2];

	var result = void 0;
	forEach(pointer.split('.').reverse(), function (element, index) {
		if (index === 0) result = _defineProperty({}, element, value);else result = _defineProperty({}, element, result);
	});

	return extend(result, data);
}

/**
 * Clears an array from falsy values.
 */

function clear(array) {
	var newArr = [];

	forEach(array, function (element) {
		if (!!element) {
			newArr.push(element);
		}
	});

	return newArr;
}

/* ========= Extends ========= */

module.exports.toString = toString;
module.exports.isArray = isArray;
module.exports.fullTypeOf = fullTypeOf;
module.exports.typeOf = typeOf;
module.exports.logger = logger;
module.exports.forEach = forEach;
module.exports.extend = extend;
module.exports.executePointer = executePointer;
module.exports.writePointer = writePointer;
module.exports.clear = clear;
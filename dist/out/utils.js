'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toString = Object.prototype.toString;

module.exports.toString = toString;

var isArray = Array.isArray || function isArrayPolyfill(object) {
  return toString.call(object) === '[object Array]';
};

module.exports.isArray = isArray;

function fullTypeOf(object) {
  return toString.call(object).slice(8, -1);
}

module.exports.fullTypeOf = fullTypeOf;

function typeOf(object) {
  return isArray(object) ? 'array' : typeof object === 'undefined' ? 'undefined' : _typeof(object);
}

module.exports.typeOf = typeOf;

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

module.exports.logger = logger;

function forEach(array, handler) {
  var calculatedIndex = 0;
  for (var l = array.length, index = l; index !== 0; --index) {
    calculatedIndex = l - index;
    handler(array[calculatedIndex], calculatedIndex);
  }
}

module.exports.forEach = forEach;

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

module.exports.extend = extend;

function executePointer(pointer) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var result = void 0;
  forEach(pointer.split('.'), function (element, index) {
    if (index === 0) result = data[element];else result = result[element];
  });
  return result;
}

module.exports.executePointer = executePointer;

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

module.exports.writePointer = writePointer;
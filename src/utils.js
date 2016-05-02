'use strict';

let toString = Object.prototype.toString;

module.exports.toString = toString;

let isArray = Array.isArray || function isArrayPolyfill (object) {
  return toString.call(object) === '[object Array]';
}

module.exports.isArray = isArray;

function fullTypeOf (object) {
  return toString.call(object).slice(8, -1);
}

module.exports.fullTypeOf = fullTypeOf;

function typeOf (object) {
  return isArray(object) ? 'array' : typeof object;
}

module.exports.typeOf = typeOf;

function logger (module, settings = {}) {
  return {
    module,
    new (newModule, newSettings = {}) {
      return logger(`${module} -> ${newModule}`, newSettings);
    },
    log (message) {
      if (fullTypeOf(message) === 'String' && (settings.quite !== 1 || settings.quite !== 3)) {
        console.log(`[${module}] info: ${message}`);
      }
    },
    error (message) {
      if (fullTypeOf(message) === 'String' && (settings.quite !== 2 || settings.quite !== 3)) {
        console.error(`[${module}] error: ${message}`);
      }
    }
  }
}

module.exports.logger = logger;

function forEach (array, handler) {
  let calculatedIndex = 0;
  for (let l = array.length, index = l; index !== 0; --index) {
    calculatedIndex = l - index;
    handler(array[calculatedIndex], calculatedIndex);
  }
}

module.exports.forEach = forEach;

function extend (extender = {}, extendable = {}, overwrite = true) {
  forEach(Object.keys(extender), (element, index) => {
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

function executePointer (pointer, data = {}) {
  let result;
  forEach(pointer.split('.'), (element, index) => {
    if (index === 0) result = data[element];
    else result = result[element];
  });
  return result;
}

module.exports.executePointer = executePointer;

function writePointer (pointer = '', data, value) {
  let result;
  forEach(pointer.split('.').reverse(), (element, index) => {
    if (index === 0) result = { [element]: value };
    else result = { [element]: result };
  });

  return extend(result, data);
}

module.exports.writePointer = writePointer;

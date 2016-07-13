'use strict';

/* ========= Modules ========= */

var utils = require('./utils');

/* ========= Core ========= */

/**
 * A primary object that stores data
 * in itself.
 */

var dataStorage = {};

/**
 * A function that works with data storage object.
 *
 * Function behaves differently depending on arguments.
 *
 * If there are no arguments, then data storage object returned.
 * If target is an Object and no "value" argument is provided,
 * thed data storage object gets extended by a special method from
 * utils set.
 * If target is a String and nove "value" argument is provided,
 * then target argument behaves as a property. A special function
 * gets executed to get the value out of data storage object using
 * a string pointer.
 * If target is a String and value is provided, then String behaves
 * as a pointer the value to be written to (the value gets written to
 * to the location which pointer points to).
 * If none of these match, data storage object is returned.
 *
 * Example of usage: .data("person.info.name", "Rmxer");
 *
 * This function deals with data storage globally, so all Rmx instances
 * inherit all the data from the global storage.
 *
 * This feature is going to be used in future to configure Rmx and its instances.
 * Even though it is going to be used for configuration mostly, you can use data
 * storage however you want.
 */

function data(target, value) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var overwrite = options.overwrite;

  if (!target) {
    return dataStorage;
  } else if (utils.fullTypeOf(target) === 'Object' && !value) {
    dataStorage = utils.extend(target, dataStorage, overwrite);
  } else if (utils.fullTypeOf(target) === 'String') {
    if (!value) {
      return utils.executePointer(target, dataStorage);
    } else {
      utils.writePointer(target, dataStorage, value);
    }
  }

  return dataStorage;
}

/* ========= Exports ========= */

module.exports = data;
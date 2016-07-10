'use strict';

var utils = require('./utils');

var dataStorage = {
  events: {},
  queue: []
};

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

module.exports = data;
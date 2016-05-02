'use strict';
let utils = require('./utils');

let dataStorage = {
  events: {},
  queue: []
};

function data (target, value, options = {}) {
  let { overwrite } = options;
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

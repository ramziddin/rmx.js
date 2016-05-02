'use strict';

let utils = require('../utils');

module.exports = {
  name: 'data',
  core ($) {
    let [target, value, options = {}] = $.arguments;
    let { overwrite } = options;
    $.when(target, {
      isObject () {
        $.chain.dataStorage = utils.extend(target, $.chain.dataStorage, overwrite);
      },
      isString() {
        if (value) {
          $.chain.dataStorage = utils.writePointer(target, $.chain.dataStorage, value);
        }
      }
    });
  }
};

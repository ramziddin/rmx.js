'use strict';

var utils = require('../utils');

module.exports = {
  name: 'Data',
  core: function core($) {
    var target = $.arguments[0];
    $.return = !target ? $.chain.dataStorage : utils.executePointer(target, $.chain.dataStorage);
  }
};
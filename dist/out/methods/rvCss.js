'use strict';

var utils = require('../utils');

module.exports = {
  name: 'Css',
  core: function core($) {
    var ruleName = $.arguments[0];
    var selector = $.chain.selector[0];
    $.return = selector.style[ruleName];
  }
};
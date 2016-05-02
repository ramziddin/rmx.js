'use strict';

let utils = require('../utils');

module.exports = {
  name: 'Css',
  core ($) {
    let ruleName = $.arguments[0];
    let selector = $.chain.selector[0];
    $.return = selector.style[ruleName];
  }
};

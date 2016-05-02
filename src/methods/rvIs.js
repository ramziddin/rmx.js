'use strict';

let utils = require('../utils');

module.exports = {
  name: 'Is',
  core ($) {
    let pattern = $.arguments[0];
    $.when(pattern, {
      isString () {
        $.return = $.is($.chain.selector[0], pattern);
      }
    });
  }
};

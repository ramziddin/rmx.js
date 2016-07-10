'use strict';

var utils = require('../utils');

module.exports = {
  name: 'Is',
  core: function core($) {
    var pattern = $.arguments[0];
    $.when(pattern, {
      isString: function isString() {
        $.return = $.is($.chain.selector[0], pattern);
      }
    });
  }
};
'use strict';

var utils = require('../utils');

module.exports = {
  name: 'filter',
  core: function core($) {
    var pattern = $.arguments[0];
    $.when(pattern, {
      isString: function isString() {
        var result = [];
        $.forEach(function (element) {
          if ($.is(element, pattern) === true) result.push(element);
        });
        $.chain.selector = result;
      }
    });
  }
};
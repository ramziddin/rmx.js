'use strict';

let utils = require('../utils');

module.exports = {
  name: 'filter',
  core ($) {
    let pattern = $.arguments[0];
    $.when(pattern, {
      isString () {
        let result = [];
        $.forEach(function (element) {
          if ($.is(element, pattern) === true) result.push(element);
        });
        $.chain.selector = result;
      }
    });
  }
};

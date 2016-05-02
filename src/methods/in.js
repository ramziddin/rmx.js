'use strict';

module.exports = {
  name: 'in',
  core ($) {
    let inNum = parseInt($.arguments[0], 10);
    $.when(inNum, {
      isNumber () {
        $.chain.selector = $.chain.selector.slice(inNum, inNum + 1);
      }
    });
  }
};

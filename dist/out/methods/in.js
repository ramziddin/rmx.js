'use strict';

module.exports = {
  name: 'in',
  core: function core($) {
    var inNum = parseInt($.arguments[0], 10);
    $.when(inNum, {
      isNumber: function isNumber() {
        $.chain.selector = $.chain.selector.slice(inNum, inNum + 1);
      }
    });
  }
};
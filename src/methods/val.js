'use strict';

module.exports = {
  name: 'val',
  core ($) {
    $.when($.arguments[0], {
      isString () {
        $.forEach(function (element, index) {
          element.value = $.arguments[0];
        });
      }
    });
  }
};

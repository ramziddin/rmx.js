'use strict';

module.exports = {
  name: 'html',
  core ($) {
    $.when($.arguments[0], {
      isString () {
        $.forEach(function (element, index) {
          element.innerHTML = $.arguments[0];
        });
      }
    });
  }
};

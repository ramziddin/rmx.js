'use strict';

module.exports = {
  name: 'html',
  core: function core($) {
    $.when($.arguments[0], {
      isString: function isString() {
        $.forEach(function (element, index) {
          element.innerHTML = $.arguments[0];
        });
      }
    });
  }
};
'use strict';

module.exports = {
  name: 'val',
  core: function core($) {
    $.when($.arguments[0], {
      isString: function isString() {
        $.forEach(function (element, index) {
          element.value = $.arguments[0];
        });
      }
    });
  }
};
'use strict';

module.exports = {
  name: 'each',
  core: function core($) {
    if ($.callback) {
      $.forEach(function (element, index) {
        $.callback(element, index);
      });
    }
  }
};
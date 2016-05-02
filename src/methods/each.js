'use strict';

module.exports = {
  name: 'each',
  core ($) {
    if ($.callback) {
      $.forEach(function (element, index) {
        $.callback(element, index);
      });
    }
  }
};

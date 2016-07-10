'use strict';

var utils = require('../utils');

module.exports = {
  name: 'css',
  core: function core($) {
    var css = $.arguments[0];
    var value = $.arguments[1];
    $.when(css, {
      isObject: function isObject() {
        $.forEach(function (element) {
          utils.forEach(Object.keys(css), function (key) {
            element.style[key] = css[key];
          });
        });
      },
      isString: function isString() {
        $.forEach(function (element) {
          element.style[css] = value;
        });
      }
    });
  }
};
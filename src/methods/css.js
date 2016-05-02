'use strict';

let utils = require('../utils');

module.exports = {
  name: 'css',
  core ($) {
    let css = $.arguments[0];
    let value = $.arguments[1];
    $.when(css, {
      isObject () {
        $.forEach(function (element) {
          utils.forEach(Object.keys(css), function (key) {
            element.style[key] = css[key];
          });
        });
      },
      isString() {
        $.forEach(function (element) {
          element.style[css] = value;
        });
      }
    });
  }
};

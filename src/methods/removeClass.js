'use strict';

let utils = require('../utils');

module.exports = {
  name: 'removeClass',
  core ($) {
    let className = $.arguments[0];
    let splittedClassName = className.split(/\s+/g);
    $.when(className, {
      isString () {
        $.forEach(function (element) {
          utils.forEach(splittedClassName, function (className) {
            element.classList.remove(className);
          });
        });
      }
    });
  }
};

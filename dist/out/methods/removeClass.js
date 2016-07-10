'use strict';

var utils = require('../utils');

module.exports = {
  name: 'removeClass',
  core: function core($) {
    var className = $.arguments[0];
    var splittedClassName = className.split(/\s+/g);
    $.when(className, {
      isString: function isString() {
        $.forEach(function (element) {
          utils.forEach(splittedClassName, function (className) {
            element.classList.remove(className);
          });
        });
      }
    });
  }
};
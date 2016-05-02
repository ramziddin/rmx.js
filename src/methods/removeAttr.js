'use strict';

let utils = require('../utils');

module.exports = {
  name: 'removeAttr',
  core ($) {
    let [attrName, attrValue] = $.arguments;
    $.when(attrName, {
      isString () {
        $.forEach(function (element) {
          element.removeAttribute(attrName, attrValue);
        });
      },
      isArray () {
        utils.forEach(attrName, function (key) {
          $.forEach(function (element) {
            element.removeAttribute(key);
          });
        });
      }
    });
  }
};

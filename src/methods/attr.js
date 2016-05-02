'use strict';

let utils = require('../utils');

module.exports = {
  name: 'attr',
  core ($) {
    let [attrName, attrValue] = $.arguments;
    $.when(attrName, {
      isString () {
        $.forEach(function (element) {
          element.setAttribute(attrName, attrValue);
        });
      },
      isObject () {
        utils.forEach(Object.keys(attrName), function (key) {
          $.forEach(function (element) {
            element.setAttribute(key, attrName[key]);
          });
        });
      }
    });
  }
};

'use strict';

let fetchselector = require('../fetchselector');
let utils = require('../utils');

module.exports = {
  name: 'prepend',
  core ($) {
    $.forEach(function ($element) {
      utils.forEach($.arguments, function (element) {
        utils.forEach(fetchselector(element), function (element) {
          $element.insertBefore(element, $element.firstChild);
        });
      });
    });
  }
};

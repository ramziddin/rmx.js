'use strict';

let fetchselector = require('../fetchselector');
let utils = require('../utils');

module.exports = {
  name: 'append',
  core ($) {
    $.forEach(function ($element) {
      utils.forEach($.arguments, function (element) {
        utils.forEach(fetchselector(element), function (element) {
          $element.appendChild(element);
        });
      });
    });
  }
};

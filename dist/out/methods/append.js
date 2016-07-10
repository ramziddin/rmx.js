'use strict';

var fetchselector = require('../fetchselector');
var utils = require('../utils');

module.exports = {
  name: 'append',
  core: function core($) {
    $.forEach(function ($element) {
      utils.forEach($.arguments, function (element) {
        utils.forEach(fetchselector(element), function (element) {
          $element.appendChild(element);
        });
      });
    });
  }
};
'use strict';

var utils = require('./utils');

module.exports = function (selector) {
  if (selector === window || selector === document || selector === document.body) {
    selector = [selector];
  } else if (utils.fullTypeOf(selector) === 'String') {
    selector = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof window.HTMLElement || selector instanceof window.NodeList) {
    selector = selector instanceof window.NodeList ? Array.from(selector) : [selector];
  } else {
    selector = selector.selector;
  }

  return selector;
};
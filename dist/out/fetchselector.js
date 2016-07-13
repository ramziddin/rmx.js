'use strict';

/* ========= Modules ========= */

var utils = require('./utils');

/* ========= Core ========= */

/**
 * selector argument can be a window object,
 * document object, body element, a string,
 * html element, a Rmx instance, an object with
 * selector property or an array of everything above.
 *
 * Whatever is accepted, selector gets "packed" into an array
 * and gets returned.
 *
 * Note: wherever you see "RMX" as a type of object, it means that
 * it could be anything acceptable by fetch selector function.
 */

function fetchSelector(selector) {
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
}

/* ========= Export ========= */

module.exports = fetchSelector;
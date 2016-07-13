'use strict';

/* ========= Modules ========= */

var fetchselector = require('./fetchselector');

/* ========= Core ========= */

/**
 * Rmx class.
 * Fetches selector and initializes data field.
 */

function Rmx() {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? 'body' : arguments[0];

  this.dataStorage = Rmx.data();
  this.selector = fetchselector(selector);
}

/**
 * Rmx class helper function.
 * Returns an instance of Rmx.
 */

function $(selector) {
  return new Rmx(selector);
}

/* === Rmx's static methods === */

/**
 * Used for exending Rmx class.
 */

Rmx.extend = $.extend = require('./rmxextend');

/**
 * Used to deal with data storage.
 */

Rmx.data = $.data = require('./rmxdata');

/**
 * A helper method for creating a direct instance of Rmx
 * with a new element.
 */

Rmx.create = $.create = function (selector) {
  return new Rmx(document.createElement(selector));
};

/**
 * Note: rvMETHODNAME. "rv" stands for "returns value".
 */

// Method: data
Rmx.extend(require('./methods/data'));
// Method: Data
Rmx.extend(require('./methods/rvData'));
// Method: each
Rmx.extend(require('./methods/each'));
// Method: in
Rmx.extend(require('./methods/in'));
// Method: html
Rmx.extend(require('./methods/html'));
// Method: Html
Rmx.extend(require('./methods/rvHtml'));
// Method: val
Rmx.extend(require('./methods/val'));
// Method: Val
Rmx.extend(require('./methods/rvVal'));
// Method: addClass
Rmx.extend(require('./methods/addClass'));
// Method: toggleClass
Rmx.extend(require('./methods/toggleClass'));
// Method: removeClass
Rmx.extend(require('./methods/removeClass'));
// Method: attr
Rmx.extend(require('./methods/attr'));
// Method: Attr
Rmx.extend(require('./methods/rvAttr'));
// Method: removeAttr
Rmx.extend(require('./methods/removeAttr'));
// Method: css
Rmx.extend(require('./methods/css'));
// Method: Css
Rmx.extend(require('./methods/rvCss'));
// Method: Null
Rmx.extend(require('./methods/rvNull'));
// Method: remove
Rmx.extend(require('./methods/remove'));
// // Method: append
Rmx.extend(require('./methods/append'));
// // Method: prepend
Rmx.extend(require('./methods/prepend'));
// // Method: on
Rmx.extend(require('./methods/on'));
// // Method: trigger
Rmx.extend(require('./methods/trigger'));
// Method: off
Rmx.extend(require('./methods/off'));
// Method: is
Rmx.extend(require('./methods/rvIs'));
// Method: filter
Rmx.extend(require('./methods/filter'));
// Method: fadeIn
Rmx.extend(require('./methods/fadeIn'));
// Method: fadeOut
Rmx.extend(require('./methods/fadeOut'));
// Method: scroll
Rmx.extend(require('./methods/scroll'));
// Method: scrollTop
Rmx.extend(require('./methods/rvScrollTop'));

/* ========= Export ========= */

module.exports = { Rmx: Rmx, $: $ };
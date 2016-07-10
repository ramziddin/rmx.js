'use strict';

var fetchselector = require('./fetchselector');

function Rmx() {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? 'body' : arguments[0];

  this.dataStorage = Rmx.data();
  this.selector = fetchselector(selector);
}

function $(selector) {
  return new Rmx(selector);
}

Rmx.extend = $.extend = require('./rmxextend');
Rmx.data = $.data = require('./rmxdata');
Rmx.create = $.create = function (selector) {
  return new Rmx(document.createElement(selector));
};

// // Method: data
Rmx.extend(require('./methods/data'));
// // Method: Data
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

// Exporting Rmx

module.exports = { Rmx: Rmx, $: $ };
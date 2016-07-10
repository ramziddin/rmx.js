'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof root.define === 'function' && root.define.amd) {
    // AMD. Register as an anonymous module.
    root.define(['exports']);
  } else if (_typeof(root.exports) === 'object' && typeof root.exports.nodeName !== 'string') {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory(root.Rmx = {});
  }
})(window || undefined, function (exports) {
  var _require = require('./rmxclass');

  var Rmx = _require.Rmx;
  var $ = _require.$;

  exports.Rmx = Rmx;
  exports.$ = $;
});
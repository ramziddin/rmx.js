'use strict';
(function (root, factory) {
  if (typeof root.define === 'function' && root.define.amd) {
    // AMD. Register as an anonymous module.
    root.define(['exports']);
  } else if (typeof root.exports === 'object' && typeof root.exports.nodeName !== 'string') {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory(root.Rmx = {});
  }
}(window || this, function (exports) {
  let { Rmx, $ } = require('./rmxclass');
  exports.Rmx = Rmx;
  exports.$ = $;
}));

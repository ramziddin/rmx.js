'use strict';

var Rmx = require('./rmxclass');
var utils = require('./utils');
var rmxUtilitiesLogger = utils.logger('rmxutilities');

module.exports = function (self, options) {
  var exportUtils = {};

  // Chain

  exportUtils.chain = self;

  // forEach

  function forEach(handler) {
    utils.forEach(self.selector, handler.bind(self));
    return exportUtils;
  }

  exportUtils.forEach = forEach;

  // arguments

  exportUtils.arguments = options.arguments;

  // callback

  var callbackFn = options.arguments[options.arguments.length - 1];

  function callback() {
    callbackFn.apply(self, arguments);
    return exportUtils;
  }

  if (utils.fullTypeOf(callbackFn) === 'Function' ? callbackFn : undefined) {
    exportUtils.callback = callback;
  }

  // typeOf

  function typeOf(object) {
    return utils.fullTypeOf(object);
  }

  exportUtils.typeOf = typeOf;

  // when

  function when(object, events) {
    var type = utils.fullTypeOf(object);
    (events[type] || events['is' + type] || function () {}).call(self);
  }

  exportUtils.when = when;

  // isNull

  function isNull() {
    return self.selector.length <= 0;
  }

  exportUtils.isNull = isNull;

  // is

  function is(element, pattern) {
    if (element && utils.fullTypeOf(pattern) === 'String') {
      return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, pattern);
    } else {
      return false;
    }
  }

  exportUtils.is = is;

  // return

  exportUtils.return = null;

  return exportUtils;
};
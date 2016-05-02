'use strict';

let Rmx = require('./rmxclass');
let utils = require('./utils');
let rmxUtilitiesLogger = utils.logger('rmxutilities')

module.exports = function (self, options) {
  let exportUtils = {};

  // Chain

  exportUtils.chain = self;

  // forEach

  function forEach (handler) {
    utils.forEach(self.selector, handler.bind(self));
    return exportUtils;
  }

  exportUtils.forEach = forEach;

  // arguments

  exportUtils.arguments = options.arguments;

  // callback

  let callbackFn = options.arguments[options.arguments.length - 1];

  function callback () {
    callbackFn.apply(self, arguments);
    return exportUtils;
  }

  if (utils.fullTypeOf(callbackFn) === 'Function' ? callbackFn : undefined) {
    exportUtils.callback = callback;
  }

  // typeOf

  function typeOf (object) {
    return utils.fullTypeOf(object);
  }

  exportUtils.typeOf = typeOf;

  // when

  function when (object, events) {
    let type = utils.fullTypeOf(object);
    (events[type] || events['is' + type] || (() => {})).call(self);
  }

  exportUtils.when = when;

  // isNull

  function isNull () {
    return self.selector.length <= 0;
  }

  exportUtils.isNull = isNull;

  // is

  function is (element, pattern) {
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
}

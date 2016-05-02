'use strict';

module.exports = {
  name: 'on',
  core ($) {
    let eventName = $.arguments[0];
    $.when(eventName, {
      isString () {
        if ($.callback) {
          $.forEach(function (element) {
            $.chain.data('events.' + eventName, $.callback);
            element.addEventListener($.arguments[0], $.callback);
          });
        }
      }
    });
  }
};

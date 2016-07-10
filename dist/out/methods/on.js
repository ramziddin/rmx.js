'use strict';

module.exports = {
  name: 'on',
  core: function core($) {
    var eventName = $.arguments[0];
    $.when(eventName, {
      isString: function isString() {
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
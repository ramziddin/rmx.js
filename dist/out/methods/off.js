'use strict';

module.exports = {
  name: 'off',
  core: function core($) {
    var eventName = $.arguments[0];
    $.when(eventName, {
      isString: function isString() {
        $.forEach(function (element) {
          element.removeEventListener(eventName, $.chain.Data('events.' + eventName));
          $.chain.dataStorage.events[eventName] = undefined;
        });
      }
    });
  }
};
'use strict';

module.exports = {
  name: 'off',
  core ($) {
    let eventName = $.arguments[0];
    $.when(eventName, {
      isString () {
        $.forEach(function (element) {
          element.removeEventListener(eventName, $.chain.Data('events.' + eventName));
          $.chain.dataStorage.events[eventName] = undefined;
        });
      }
    });    
  }
};

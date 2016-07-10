'use strict';

module.exports = {
  name: 'trigger',
  core: function core($) {
    var event = document.createEvent('Event');
    event.initEvent($.arguments[0], true, true);
    $.forEach(function (element) {
      element.dispatchEvent(event);
    });
  }
};
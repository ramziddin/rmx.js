'use strict';

module.exports = {
  name: 'trigger',
  core ($) {
    let event = document.createEvent('Event');
    event.initEvent($.arguments[0], true, true);
    $.forEach(function (element) {
      element.dispatchEvent(event);
    });
  }
};

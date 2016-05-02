'use strict';

module.exports = {
  name: 'Attr',
  core ($) {
    $.return = $.chain.selector[0].getAttribute($.arguments[0]);
  }
};

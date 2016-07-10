'use strict';

module.exports = {
  name: 'Attr',
  core: function core($) {
    $.return = $.chain.selector[0].getAttribute($.arguments[0]);
  }
};
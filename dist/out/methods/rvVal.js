'use strict';

module.exports = {
  name: 'Val',
  core: function core($) {
    $.return = $.chain.selector[0].value;
  }
};
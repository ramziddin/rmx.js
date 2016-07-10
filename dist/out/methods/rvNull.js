'use strict';

module.exports = {
  name: 'Null',
  core: function core($) {
    $.return = $.chain.selector.length <= 0;
  }
};
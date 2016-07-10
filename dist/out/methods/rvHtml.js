'use strict';

module.exports = {
  name: 'Html',
  core: function core($) {
    $.return = $.chain.selector[0].innerHTML;
  }
};
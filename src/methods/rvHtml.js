'use strict';

module.exports = {
  name: 'Html',
  core ($) {
    $.return = $.chain.selector[0].innerHTML;
  }
};

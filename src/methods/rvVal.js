'use strict';

module.exports = {
  name: 'Val',
  core ($) {
    $.return = $.chain.selector[0].value;
  }
};

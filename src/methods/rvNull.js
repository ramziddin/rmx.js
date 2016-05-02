'use strict';

module.exports = {
  name: 'Null',
  core ($) {
    $.return = $.chain.selector.length <= 0;
  }
};

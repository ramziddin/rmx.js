'use strict';

module.exports = {
  name: 'remove',
  core: function core($) {
    $.forEach(function (element) {
      element.parentNode.removeChild(element);
    });
    $.chain.selector = [];
  }
};
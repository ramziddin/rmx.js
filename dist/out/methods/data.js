'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var utils = require('../utils');

module.exports = {
  name: 'data',
  core: function core($) {
    var _$$arguments = _slicedToArray($.arguments, 3);

    var target = _$$arguments[0];
    var value = _$$arguments[1];
    var _$$arguments$ = _$$arguments[2];
    var options = _$$arguments$ === undefined ? {} : _$$arguments$;
    var overwrite = options.overwrite;

    $.when(target, {
      isObject: function isObject() {
        $.chain.dataStorage = utils.extend(target, $.chain.dataStorage, overwrite);
      },
      isString: function isString() {
        if (value) {
          $.chain.dataStorage = utils.writePointer(target, $.chain.dataStorage, value);
        }
      }
    });
  }
};
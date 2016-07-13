'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* ========= Modules ========= */

var utils = require('../utils');

/* ========= Core ========= */

/**
 * A port of Rmx.data ($.data) as a Rmx instance
 * method, with an exception that it deals with
 * local data storage and with an exception on limit
 * of set only functionallity. (For read functionallity
 * use .Data method).
 */

var data = {
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
				$.scope.dataStorage = utils.extend(target, $.scope.dataStorage, overwrite);
			},
			isString: function isString() {
				if (value) {
					$.scope.dataStorage = utils.writePointer(target, $.scope.dataStorage, value);
				}
			}
		});
	}
};

/* ========= Exports ========= */

module.exports = data;
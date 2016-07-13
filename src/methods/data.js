/* ========= Modules ========= */

const utils = require('../utils');

/* ========= Core ========= */

/**
 * A port of Rmx.data ($.data) as a Rmx instance
 * method, with an exception that it deals with
 * local data storage and with an exception on limit
 * of set only functionallity. (For read functionallity
 * use .Data method).
 */

const data = {
	name: 'data',
	core($) {
		let [target, value, options = {}] = $.arguments;
		const { overwrite } = options;

		$.when(target, {
			isObject() {
				$.scope.dataStorage = utils.extend(target, $.scope.dataStorage, overwrite);
			},
			isString() {
				if (value) {
					$.scope.dataStorage = utils.writePointer(target, $.scope.dataStorage, value);
				}
			},
		});
	},
};

/* ========= Exports ========= */

module.exports = data;

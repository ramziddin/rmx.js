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

const Data = {
	name: 'Data',
	core($) {
		const target = $.arguments[0];
		$.return = !target ? $.scope.dataStorage : utils.executePointer(target, $.scope.dataStorage);
	},
};

/* ========= Exports ========= */

module.exports = Data;

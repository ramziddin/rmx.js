'use strict';

/* ========= Modules ========= */

var utils = require('./utils');

/* ========= Core ========= */

/**
 * A function for extending Rmx.
 * Accepts an object with two properties: name (String) and core (Function).
 * Both name and core properties are required for creating a new method.
 *
 * If selector is not empty and everything goes well,
 * a sepcial set of utilities (rmxutitlities) gets passed to
 * core function for convinient dealing with selector.
 *
 * Rmx methods split on safe and unsafe methods.
 * Safe methods must begin with lower case letter.
 * Unsafe methods must begin with upper case letter.
 *
 * Safe methods guarantee that the chain is not going to be broken and
 * that it is going to return only an instance of Rmx.
 * While unsafe method might break a chain because of unexpected return value.
 */

function extend(options) {
	var rmxExtendLogger = utils.logger('Rmx.extend');
	var name = options.name;
	var core = options.core;

	var returnValue = void 0;
	var rmxutilities = void 0;

	if (utils.fullTypeOf(name) === 'String') {
		if (utils.fullTypeOf(core) === 'Function') {
			this.prototype[name] = function () {
				this.selector = utils.clear(this.selector);
				rmxutilities = require('./rmxutilities')(this, {
					arguments: arguments
				});
				core.call(this, rmxutilities);
				return name[0] === name[0].toUpperCase() ? rmxutilities.return : this;
			};
		} else {
			rmxExtendLogger.error('core - ' + utils.fullTypeOf(name) + ' instead of Function');
		}
	} else {
		rmxExtendLogger.error('name - ' + utils.fullTypeOf(name) + ' instead of String');
	}
}

/* ========= Export ========= */

module.exports = extend;
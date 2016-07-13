((root, factory) => {
	if (typeof root.define === 'function' && root.define.amd) {
		// AMD. Register as an anonymous module.
		root.define(['exports']);
	} else if (typeof root.exports === 'object' && typeof root.exports.nodeName !== 'string') {
		// CommonJS
		factory(exports);
	} else {
		// Browser globals
		factory(root.Rmx = {});
	}
})(window || this, (exports) => {
	/**
	 * Export primary Rmx.js class (Rmx) and its helper function ($).
	 */

	const { Rmx, $ } = require('./rmxclass');
	exports.Rmx = Rmx;
	exports.$ = $;
});

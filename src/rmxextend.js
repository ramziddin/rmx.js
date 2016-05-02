'use strict';
let utils = require('./utils');

module.exports = function (options) {
  let rmxExtendLogger = utils.logger('Rmx.extend');
  let { name, core } = options;
  let returnValue;
  let rmxutilities;
  if (utils.fullTypeOf(name) === 'String') {
    if (utils.fullTypeOf(core) === 'Function') {
      this.prototype[name] = function () {
        if (this.selector.length <= 0) return rmxExtendLogger.error('selector - selector is empty!');
        rmxutilities = require('./rmxutilities')(this, {
          arguments
        });
        core.call(this, rmxutilities);
        return name[0] === name[0].toUpperCase() ? rmxutilities.return : this;
      }
    } else {
      rmxExtendLogger.error(`core - ${utils.fullTypeOf(name)} instead of Function`);
    }
  } else {
    rmxExtendLogger.error(`name - ${utils.fullTypeOf(name)} instead of String`);
  }
}

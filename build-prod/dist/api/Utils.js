'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.NotNullObject = void 0;
require('reflect-metadata');
const lodash_1 = require('lodash');
exports.NotNullObject = object => {
  return lodash_1.pickBy(object, value => value != null);
};
const a = lodash_1.pickBy({ name: '' }, value => value != null);
const b = exports.NotNullObject({ name: '' });
//# sourceMappingURL=Utils.js.map

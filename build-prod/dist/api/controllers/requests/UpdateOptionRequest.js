'use strict';
/*

 *

 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateOption = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class UpdateOption {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  UpdateOption.prototype,
  'optionId',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  UpdateOption.prototype,
  'name',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  UpdateOption.prototype,
  'sortOrder',
  void 0
);
exports.UpdateOption = UpdateOption;
//# sourceMappingURL=UpdateOptionRequest.js.map

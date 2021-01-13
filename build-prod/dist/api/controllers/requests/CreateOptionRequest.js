'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateOption = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CreateOption {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  CreateOption.prototype,
  'name',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateOption.prototype,
  'sortOrder',
  void 0
);
exports.CreateOption = CreateOption;
//# sourceMappingURL=CreateOptionRequest.js.map

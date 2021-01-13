'use strict';
/*

 *

 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateCategoryRequest = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class UpdateCategoryRequest {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  UpdateCategoryRequest.prototype,
  'categoryId',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  UpdateCategoryRequest.prototype,
  'name',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  UpdateCategoryRequest.prototype,
  'sortOrder',
  void 0
);
exports.UpdateCategoryRequest = UpdateCategoryRequest;
//# sourceMappingURL=updateCategoryRequest.js.map

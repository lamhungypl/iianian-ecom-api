'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DeleteCategoryRequest = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class DeleteCategoryRequest {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  DeleteCategoryRequest.prototype,
  'categoryId',
  void 0
);
exports.DeleteCategoryRequest = DeleteCategoryRequest;
//# sourceMappingURL=deleteCategoryRequest.js.map

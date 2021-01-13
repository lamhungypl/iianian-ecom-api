'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AddCategory = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class AddCategory {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  AddCategory.prototype,
  'name',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  AddCategory.prototype,
  'sortOrder',
  void 0
);
exports.AddCategory = AddCategory;
//# sourceMappingURL=addCategoryRequest.js.map

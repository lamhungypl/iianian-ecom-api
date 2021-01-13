'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DeleteProductRequest = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class DeleteProductRequest {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  DeleteProductRequest.prototype,
  'productId',
  void 0
);
exports.DeleteProductRequest = DeleteProductRequest;
//# sourceMappingURL=deleteProductRequest.js.map

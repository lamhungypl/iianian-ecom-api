'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateManufacturer = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CreateManufacturer {}
tslib_1.__decorate(
  [
    class_validator_1.MaxLength(30, {
      message: 'Name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata('design:type', String),
  ],
  CreateManufacturer.prototype,
  'name',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  CreateManufacturer.prototype,
  'image',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateManufacturer.prototype,
  'sortOrder',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateManufacturer.prototype,
  'status',
  void 0
);
exports.CreateManufacturer = CreateManufacturer;
//# sourceMappingURL=createManufacturerRequest.js.map

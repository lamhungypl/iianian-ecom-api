'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateCustomer = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CreateCustomer {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateCustomer.prototype,
  'customerGroupId',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  CreateCustomer.prototype,
  'username',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsEmail(), tslib_1.__metadata('design:type', String)],
  CreateCustomer.prototype,
  'email',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateCustomer.prototype,
  'mobileNumber',
  void 0
);
tslib_1.__decorate(
  [
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsAlphanumeric(),
    class_validator_1.MinLength(5, {
      message: 'password is minimum 5 character',
    }),
    tslib_1.__metadata('design:type', String),
  ],
  CreateCustomer.prototype,
  'password',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  CreateCustomer.prototype,
  'confirmPassword',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateCustomer.prototype,
  'mailStatus',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  CreateCustomer.prototype,
  'status',
  void 0
);
exports.CreateCustomer = CreateCustomer;
//# sourceMappingURL=createCustomerRequest.js.map

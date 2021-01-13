'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ForgotPassword = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class ForgotPassword {}
tslib_1.__decorate(
  [
    class_validator_1.MaxLength(60, {
      message: 'Name is maximum 30 character',
    }),
    class_validator_1.MinLength(4, {
      message: 'Name is minimum 4 character',
    }),
    class_validator_1.IsEmail(),
    tslib_1.__metadata('design:type', String),
  ],
  ForgotPassword.prototype,
  'email',
  void 0
);
exports.ForgotPassword = ForgotPassword;
//# sourceMappingURL=forgotPasswordRequest.js.map

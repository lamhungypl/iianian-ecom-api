'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerLogin = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CustomerLogin {}
tslib_1.__decorate(
  [
    class_validator_1.IsEmail(
      {},
      {
        message: 'Please provide username as emailId',
      }
    ),
    class_validator_1.IsNotEmpty({
      message: 'Email Id is required',
    }),
    tslib_1.__metadata('design:type', String),
  ],
  CustomerLogin.prototype,
  'emailId',
  void 0
);
tslib_1.__decorate(
  [
    class_validator_1.MinLength(5, {
      message: 'password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty({
      message: 'password is required',
    }),
    tslib_1.__metadata('design:type', String),
  ],
  CustomerLogin.prototype,
  'password',
  void 0
);
exports.CustomerLogin = CustomerLogin;
//# sourceMappingURL=customerLoginRequest.js.map

'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerOauthLogin = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CustomerOauthLogin {}
tslib_1.__decorate(
  [
    class_validator_1.IsEmail(
      {},
      {
        message: 'Please give valid emailId',
      }
    ),
    class_validator_1.IsNotEmpty({
      message: 'Email Id is required',
    }),
    tslib_1.__metadata('design:type', String),
  ],
  CustomerOauthLogin.prototype,
  'emailId',
  void 0
);
exports.CustomerOauthLogin = CustomerOauthLogin;
//# sourceMappingURL=customerOauthLoginRequest.js.map

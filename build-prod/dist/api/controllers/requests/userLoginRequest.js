'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserLogin = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class UserLogin {}
tslib_1.__decorate(
  [
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata('design:type', String),
  ],
  UserLogin.prototype,
  'username',
  void 0
);
tslib_1.__decorate(
  [
    class_validator_1.IsNotEmpty({
      message: 'Password is required',
    }),
    tslib_1.__metadata('design:type', String),
  ],
  UserLogin.prototype,
  'password',
  void 0
);
exports.UserLogin = UserLogin;
//# sourceMappingURL=userLoginRequest.js.map

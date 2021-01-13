'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const User_1 = require('../models/User');
let UserRepository = class UserRepository extends typeorm_1.Repository {};
UserRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(User_1.User)],
  UserRepository
);
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map

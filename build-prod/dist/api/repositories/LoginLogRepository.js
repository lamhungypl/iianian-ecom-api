'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LoginLogRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const loginLog_1 = require('../models/loginLog');
const BaseRepository_1 = require('./base/BaseRepository');
let LoginLogRepository = class LoginLogRepository extends BaseRepository_1.BaseRepository {};
LoginLogRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(loginLog_1.LoginLog)],
  LoginLogRepository
);
exports.LoginLogRepository = LoginLogRepository;
//# sourceMappingURL=LoginLogRepository.js.map

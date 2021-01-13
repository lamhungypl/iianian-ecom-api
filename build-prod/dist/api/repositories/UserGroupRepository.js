'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserGroupRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const UserGroup_1 = require('../models/UserGroup');
const BaseRepository_1 = require('./base/BaseRepository');
let UserGroupRepository = class UserGroupRepository extends BaseRepository_1.BaseRepository {};
UserGroupRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(UserGroup_1.UserGroup)],
  UserGroupRepository
);
exports.UserGroupRepository = UserGroupRepository;
//# sourceMappingURL=UserGroupRepository.js.map

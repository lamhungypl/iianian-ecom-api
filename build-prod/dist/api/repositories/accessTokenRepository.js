'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AccessTokenRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const accessTokenModel_1 = require('../models/accessTokenModel');
const BaseRepository_1 = require('./base/BaseRepository');
let AccessTokenRepository = class AccessTokenRepository extends BaseRepository_1.BaseRepository {};
AccessTokenRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(accessTokenModel_1.AccessToken)],
  AccessTokenRepository
);
exports.AccessTokenRepository = AccessTokenRepository;
//# sourceMappingURL=accessTokenRepository.js.map

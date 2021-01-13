'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AccessTokenService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const _AccessTokenRepository_1 = require('../repositories/_AccessTokenRepository');
const BaseService_1 = require('./base/BaseService');
let AccessTokenService = class AccessTokenService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
};
AccessTokenService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        _AccessTokenRepository_1.AccessTokenRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      _AccessTokenRepository_1.AccessTokenRepository,
    ]),
  ],
  AccessTokenService
);
exports.AccessTokenService = AccessTokenService;
//# sourceMappingURL=_AccessTokenService.js.map

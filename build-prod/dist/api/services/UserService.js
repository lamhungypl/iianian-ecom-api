'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const UserRepository_1 = require('../repositories/UserRepository');
const BaseService_1 = require('./base/BaseService');
let UserService = class UserService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
};
UserService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        UserRepository_1.UserRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      UserRepository_1.UserRepository,
    ]),
  ],
  UserService
);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map

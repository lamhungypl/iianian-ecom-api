'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LoginLogService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const LoginLogRepository_1 = require('../repositories/LoginLogRepository');
const BaseService_1 = require('./base/BaseService');
const loginLog_1 = require('../models/loginLog');
let LoginLogService = class LoginLogService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
  logList(limit) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        loginLog_1.LoginLog,
        'LoginLog'
      );
      query.select([
        'COUNT(LoginLog.id) as logcount',
        'DATE(created_date) as createdDate',
      ]);
      query.groupBy('createdDate');
      query.orderBy('createdDate', 'DESC');
      query.limit(limit);
      //console.log({ logList: query.getQuery() });
      return query.getRawMany();
    });
  }
};
LoginLogService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      LoginLogRepository_1.LoginLogRepository,
      Object,
    ]),
  ],
  LoginLogService
);
exports.LoginLogService = LoginLogService;
//# sourceMappingURL=loginLogService.js.map

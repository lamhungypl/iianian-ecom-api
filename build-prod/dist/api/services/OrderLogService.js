'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderLogService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const OrderLogRepository_1 = require('../repositories/OrderLogRepository');
const BaseService_1 = require('./base/BaseService');
let OrderLogService = class OrderLogService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
OrderLogService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        OrderLogRepository_1.OrderLogRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      OrderLogRepository_1.OrderLogRepository,
      Object,
    ]),
  ],
  OrderLogService
);
exports.OrderLogService = OrderLogService;
//# sourceMappingURL=OrderLogService.js.map

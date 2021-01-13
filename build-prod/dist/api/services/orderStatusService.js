'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderStatusService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const orderStatusRepository_1 = require('../repositories/orderStatusRepository');
const BaseService_1 = require('./base/BaseService');
let OrderStatusService = class OrderStatusService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
};
OrderStatusService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        orderStatusRepository_1.OrderStatusRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      orderStatusRepository_1.OrderStatusRepository,
    ]),
  ],
  OrderStatusService
);
exports.OrderStatusService = OrderStatusService;
//# sourceMappingURL=orderStatusService.js.map

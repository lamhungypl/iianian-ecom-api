'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderProductService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const OrderProductRepository_1 = require('../repositories/OrderProductRepository');
const BaseService_1 = require('./base/BaseService');
let OrderProductService = class OrderProductService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
OrderProductService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        OrderProductRepository_1.OrderProductRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      OrderProductRepository_1.OrderProductRepository,
      Object,
    ]),
  ],
  OrderProductService
);
exports.OrderProductService = OrderProductService;
//# sourceMappingURL=OrderProductService.js.map

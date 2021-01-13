'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const OrderRepository_1 = require('../repositories/OrderRepository');
const BaseService_1 = require('./base/BaseService');
const Order_1 = require('../models/Order');
let OrderService = class OrderService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
  // find today orders
  findAllTodayOrder(todayDate) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        Order_1.Order,
        'order'
      );
      query.select([' SUM(order.total) as total']);
      query.where('DATE(order.createdDate) = :todayDate', { todayDate });
      return query.getOne();
    });
  }
  salesList() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        Order_1.Order,
        'order'
      );
      query.select([
        'COUNT(order_id) as orderCount',
        'MONTH(created_date) as month',
        'YEAR(created_date) as year',
      ]);
      query.groupBy('month');
      query.addGroupBy('year');
      query.orderBy('year', 'ASC');
      query.addOrderBy('month', 'ASC');
      query.limit(12);
      return query.getRawMany();
    });
  }
  findAllTodayOrderCount(todayDate) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        Order_1.Order,
        'order'
      );
      query.select(['COUNT(order.orderId) as orderCount']);
      query.where('DATE(order.createdDate) = :todayDate', { todayDate });
      return query.getRawOne();
    });
  }
};
OrderService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        OrderRepository_1.OrderRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      OrderRepository_1.OrderRepository,
    ]),
  ],
  OrderService
);
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map

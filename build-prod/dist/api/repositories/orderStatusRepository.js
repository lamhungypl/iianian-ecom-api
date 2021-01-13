'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderStatusRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const orderStatus_1 = require('../models/orderStatus');
const BaseRepository_1 = require('./base/BaseRepository');
let OrderStatusRepository = class OrderStatusRepository extends BaseRepository_1.BaseRepository {};
OrderStatusRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(orderStatus_1.OrderStatus)],
  OrderStatusRepository
);
exports.OrderStatusRepository = OrderStatusRepository;
//# sourceMappingURL=orderStatusRepository.js.map

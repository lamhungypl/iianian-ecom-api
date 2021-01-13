'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderTotalRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const OrderTotal_1 = require('../models/OrderTotal');
const BaseRepository_1 = require('./base/BaseRepository');
let OrderTotalRepository = class OrderTotalRepository extends BaseRepository_1.BaseRepository {};
OrderTotalRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(OrderTotal_1.OrderTotal)],
  OrderTotalRepository
);
exports.OrderTotalRepository = OrderTotalRepository;
//# sourceMappingURL=OrderTotalRepository.js.map

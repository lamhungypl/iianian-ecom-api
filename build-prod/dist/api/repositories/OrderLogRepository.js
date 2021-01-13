'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderLogRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const OrderLog_1 = require('../models/OrderLog');
const BaseRepository_1 = require('./base/BaseRepository');
let OrderLogRepository = class OrderLogRepository extends BaseRepository_1.BaseRepository {};
OrderLogRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(OrderLog_1.OrderLog)],
  OrderLogRepository
);
exports.OrderLogRepository = OrderLogRepository;
//# sourceMappingURL=OrderLogRepository.js.map

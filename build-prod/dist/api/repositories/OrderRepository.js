'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const Order_1 = require('../models/Order');
let OrderRepository = class OrderRepository extends typeorm_1.Repository {};
OrderRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(Order_1.Order)],
  OrderRepository
);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=OrderRepository.js.map

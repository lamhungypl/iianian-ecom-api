'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderProductRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const OrderProduct_1 = require('../models/OrderProduct');
const BaseRepository_1 = require('./base/BaseRepository');
let OrderProductRepository = class OrderProductRepository extends BaseRepository_1.BaseRepository {
  List(limit) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = yield this.manager.createQueryBuilder(
        OrderProduct_1.OrderProduct,
        'orderProduct'
      );
      query.select([
        'DISTINCT product_id as productId',
        'order_id as orderId',
        'name as ProductName',
        'quantity as Quantity',
        'total as Total',
        ' created_date as CreatedDate',
      ]);
      // query.groupBy('productId');
      query.orderBy('created_date', 'DESC');
      query.limit(limit);
      //console.log({ List_OrderProductRepository: query.getQuery() });
      return query.getRawMany();
    });
  }
};
OrderProductRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(OrderProduct_1.OrderProduct)],
  OrderProductRepository
);
exports.OrderProductRepository = OrderProductRepository;
//# sourceMappingURL=OrderProductRepository.js.map

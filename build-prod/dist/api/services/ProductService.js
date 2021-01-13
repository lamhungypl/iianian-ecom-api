'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductRepository_1 = require('../repositories/ProductRepository');
const BaseService_1 = require('./base/BaseService');
const OrderProduct_1 = require('../models/OrderProduct');
let ProductService = class ProductService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
  productList(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      // const { categoryId, priceOrder, ...optionsFind } = options;
      const products = yield this.repository.find(options);
      return products;
    });
  }
  productCount(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      // const { categoryId, priceOrder, ...optionsFind } = options;
      const products = yield this.repository.count(options);
      return products;
    });
  }
  recentProductSelling(limit) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        OrderProduct_1.OrderProduct,
        'orderProduct'
      );
      query.select([
        'COUNT(orderProduct.order_id) as orderCount',
        'orderProduct.product_id as product',
      ]);
      query.groupBy('product');
      query.orderBy('orderCount', 'DESC');
      query.limit(limit);
      return query.getRawMany();
    });
  }
  productMaxPrice(_a) {
    var { take, skip, join } = _a,
      options = tslib_1.__rest(_a, ['take', 'skip', 'join']);
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.productToCategory', 'productToCategory')
        .where(options.where)
        .select('MAX(product.price)', 'maxPrice');
      // if (take) {
      //   query.limit(take);
      // }
      // if (skip) {
      //   query.offset(skip);
      // }
      const { maxPrice } = yield query.getRawOne();
      return maxPrice;
    });
  }
};
ProductService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        ProductRepository_1.ProductRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      ProductRepository_1.ProductRepository,
    ]),
  ],
  ProductService
);
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map

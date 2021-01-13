'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductDiscountService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductDiscount_1 = require('../models/ProductDiscount');
const ProductDiscountRepository_1 = require('../repositories/ProductDiscountRepository');
const BaseService_1 = require('./base/BaseService');
let ProductDiscountService = class ProductDiscountService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
  findDiscountPrice(productId, todayDate) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        ProductDiscount_1.ProductDiscount,
        'productDiscount'
      );
      query.select(['productDiscount.price as price']);
      query.where('productDiscount.productId = ' + productId);
      query.andWhere(
        '(productDiscount.dateStart <= :todayDate AND productDiscount.dateEnd >= :todayDate)',
        { todayDate }
      );
      query.orderBy('productDiscount.priority', 'ASC');
      query.addOrderBy('productDiscount.price', 'ASC');
      query.limit(1);
      //console.log({ findDiscountPrice: query.getQuery() });
      return query.getRawOne();
    });
  }
};
ProductDiscountService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ProductDiscountRepository_1.ProductDiscountRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ProductDiscountRepository_1.ProductDiscountRepository,
      Object,
    ]),
  ],
  ProductDiscountService
);
exports.ProductDiscountService = ProductDiscountService;
//# sourceMappingURL=ProductDiscountService.js.map

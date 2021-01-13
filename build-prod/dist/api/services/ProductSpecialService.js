'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductSpecialService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductSpecial_1 = require('../models/ProductSpecial');
const ProductSpecialRepository_1 = require('../repositories/ProductSpecialRepository');
const BaseService_1 = require('./base/BaseService');
let ProductSpecialService = class ProductSpecialService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
  findSpecialPrice(productId, todayDate) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const query = this.repository.manager.createQueryBuilder(
        ProductSpecial_1.ProductSpecial,
        'productSpecial'
      );
      query.select(['productSpecial.price as price']);
      query.where('productSpecial.product_id = ' + productId);
      query.andWhere(
        '(productSpecial.dateStart <= :todayDate AND productSpecial.dateEnd >= :todayDate)',
        { todayDate }
      );
      query.orderBy('productSpecial.priority', 'ASC');
      query.addOrderBy('productSpecial.price', 'ASC');
      query.limit(1);
      //console.log({ findSpecialPrice: query.getQuery() });
      return query.getRawOne();
    });
  }
};
ProductSpecialService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ProductSpecialRepository_1.ProductSpecialRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ProductSpecialRepository_1.ProductSpecialRepository,
      Object,
    ]),
  ],
  ProductSpecialService
);
exports.ProductSpecialService = ProductSpecialService;
//# sourceMappingURL=ProductSpecialService.js.map
